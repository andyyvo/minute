// https://docs.assemblyai.com/walkthroughs#getting-the-transcription-result

import {} from 'dotenv/config';
import axios from 'axios';

/*
 * node ./src/utils/downloadResult.js
 */

// export default function downloadResult(audioID) {

    // const audioID = "og3aszo649-a10f-4dbd-aa96-9148bbdf64d9"
    const audioID = "ozp71x7izr-091d-461f-afd7-43d33075a9d9" // hello? this is andy...
    
    const assembly = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
            authorization: process.env.ASSEMBLYAI_API_KEY,
            "content-type": "application/json",
        },
    });
    
    assembly
        .get(`/transcript/${audioID}`)
        .then((res) => {
            console.log(res.data);
            return res.data['text'];
        })
        .catch((err) => console.error(err));

// }
