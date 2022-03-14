// https://docs.assemblyai.com/walkthroughs#submitting-files-for-transcription

import {} from 'dotenv/config';
import axios from "axios"; // fetch api calls
// import uploadAudio from './uploadAudio';

/*
 * node ./src/utils/uploadUrl.js
 */

// export default function uploadUrl(audioUrl) {

    const assembly = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
            authorization: process.env.ASSEMBLYAI_API_KEY,
            "content-type": "application/json",
        },
    });
    assembly
        .post("/transcript", {
            // audio_url: "https://bit.ly/3yxKEIY",
            // audio_url: audioUrl,
            audio_url: "https://cdn.assemblyai.com/upload/918ef71d-e319-436e-a695-e0e01ee81344", // hello? this is andy um yeah this is my recording
            // audio_url: "https://cdn.assemblyai.com/upload/db2cc70f-e7e4-4d4b-99d7-bd23a283afa0", // i like chicken so like um yeah
            disfluencies: true,
            sentiment_analysis: true,
        })
        .then((res) => {
            console.log(res.data);
            return res.data['id'];
        })
        .catch((err) => console.error(err));

//     axios.post("https://api.assemblyai.com/v2",  {
//         headers: {
//             authorization: process.env.ASSEMBLYAI_API_KEY,
//             "content-type": "application/json",
//         },
//     })
//     .then((res) => {
//         console.log(res.data);
//     })
//     .catch((err) => console.error(err));
// }