// https://docs.assemblyai.com/walkthroughs#submitting-files-for-transcription

import {} from 'dotenv/config';
import axios from "axios"; // fetch api calls

/*
 * node ./src/utils/uploadUrl.js
 */

// export default async function uploadUrl() {

    const assembly = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
            authorization: process.env.ASSEMBLYAI_API_KEY,
            "content-type": "application/json",
        },
    });
    assembly
        .post("/transcript", {
            audio_url: "https://bit.ly/3yxKEIY" // await for uploadAudio.js
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    
// }
