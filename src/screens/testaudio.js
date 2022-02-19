import * as React from 'react';
import { Text, View, Stylesheet, Button } from 'react-native';
import { Audio } from 'expo-av';

/**
 * from the expo documentation: https://docs.expo.dev/versions/latest/sdk/audio/#audiorecording
 */
export default function AudioRecord() {
    const [recording, setRecording] = React.useState();

    /**
     * starting up audio recording, requesting permissions, etc.
     */
    async function startRecording() {
        try {
            console.log('Requesting permissions!');
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            console.log('Starting recording!');
            const { recording } = await Audio.Recording.createAsync(
                Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );
            setRecording(recording);
            console.log('Recording started!');
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    /**
     * stop recording and save to local uri
     */
    async function stopRecording() {
        console.log('Stopping recording!');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        console.log('Recording stopped and stored at', uri);
    }

    return (
        <View>
            <Button
                title={recording ? 'Stop Recording' : 'Start Recording'}
                onPress={recording ? stopRecording : startRecording}
            />
        </View>
    );

}