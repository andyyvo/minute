import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';

export default function ForYouScreen() {
  // STATES
  // recording: current recording
  const [recording, setRecording] = React.useState();
  // recordings: array of all recordings
  const [recordings, setRecordings] = React.useState([]);
  // message: any error messages
  const [message, setMessage] = React.useState("");
  // transcription: result of STT call
  const [transcription, setTranscription] = React.useState("");
  // isFetching: true while making Google STT API call
  // const [isFetching, setIsFetching] = React.useState(false);

  // GOOGLE SPEECH TO TEXT
  // Imports the Google Cloud client library
  const speech = require('@google-cloud/speech');
  // Creates a client
  const client = new speech.SpeechClient();

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    
    Audio.setAudioModeAsync({ allowsRecordingIOS: false })

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    sound.volume = 1.0;
    // get the transcription of audio file
    await getTranscription(recording.getURI());

    // push the new recording to array, including transcription from STT
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
      // transcription: transcription
    });
    
    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getAllRecordings() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
          <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
        </View>
      );
    });
  }

//   async function getTranscription(recUri) {
//     setIsFetching(true);
//     try {
//       const uri = await FileSystem.getInfoAsync(recUri);
//       // console.log(`FILE INFO: ${JSON.stringify(info)}`);
//       // const uri = info.uri;
//       const formData = new FormData();
//       formData.append('file', {
//         uri,
//         type: 'audio/x-wav',
//         name: 'speech2text'
//       });
//       const response = await fetch(config.CLOUD_FUNCTION_URL, {
//         method: 'POST',
//         body: formData
//       });
//       const data = await response.json();
//       setTranscription(data.transcript);
//     } catch(error) {
//       console.log('Error with Google API call', error);
//     }
//     setIsFetching(false);
// }

async function getTranscription(recUri) {
    const audio = {
      uri: recUri,
    };
    const config = {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: 'en-US',
    };

    const request = {
      config: config,
      audio: audio,
    };

    // Detects speech in the audio file
    const [response] = await client.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    console.log('Transcription: ', transcription);
    setTranscription(transcription);
 }

  return (
    <View style={styles.container}>
      <Text>{transcription ? transcription : ""}</Text>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording} />
      <Text>{message}</Text>
      {getAllRecordings()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    flex: 1,
    margin: 16
  },
  button: {
    margin: 16
  }
});