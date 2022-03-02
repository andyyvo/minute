import {} from 'dotenv/config';
import axios from 'axios';

/*
 * node ./src/utils/downloadResult.js
 */

const transcriptID = "og3aszo649-a10f-4dbd-aa96-9148bbdf64d9"

const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
        authorization: process.env.ASSEMBLYAI_API_KEY,
        "content-type": "application/json",
    },
});

assembly
    .get(`/transcript/${transcriptID}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));