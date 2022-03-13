// https://docs.assemblyai.com/walkthroughs#submitting-files-for-transcription

import {} from 'dotenv/config';
import axios from "axios"; // fetch api calls
// import uploadAudio from './uploadAudio';

/*
 * node ./src/utils/uploadUrl.js
 */

export default function uploadUrl(audioUrl) {

    // const assembly = axios.create({
    //     baseURL: "https://api.assemblyai.com/v2",
    //     headers: {
    //         authorization: process.env.ASSEMBLYAI_API_KEY,
    //         "content-type": "application/json",
    //     },
    // });
    // assembly
    //     .post("/transcript", {
    //         audio_url: "https://bit.ly/3yxKEIY",
    //         // audio_url: audioUrl,
    //         disfluencies: true,
    //         sentiment_analysis: true,
    //     })
    //     .then((res) => {
    //         console.log(res.data);
    //         return res.data['id'];
    //     })
    //     .catch((err) => console.error(err));

    axios.post("https://api.assemblyai.com/v2",  {
        headers: {
            authorization: process.env.ASSEMBLYAI_API_KEY,
            "content-type": "application/json",
        },
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => console.error(err));
}