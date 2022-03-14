// USEFUL LINKS
// https://www.assemblyai.com/blog/uploading-files-to-assemblyai-using-node-js-and-javascript/
// https://github.com/AssemblyAI/nodejs-getting-started-stt/blob/main/upload.js
// https://www.assemblyai.com/blog/getting-started-with-speech-to-text-transcriptions-with-assemblyai-javascript-and-node-js/
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://docs.assemblyai.com/walkthroughs#authentication
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding
// https://github.com/motdotla/dotenv/issues/89

import {} from 'dotenv/config';
import fetch from "node-fetch"; // fetch api calls
import fs from "fs"; // file stream
const url = "https://api.assemblyai.com/v2/upload"; // assemblyai api endpoint

/*
 * node ./src/utils/uploadAudio.js MP3-FILE
 */

/**
 * Function that takes in an audioFile recorded from the device.
 * Returns an "upload_url" from AssemblyAI API JSON that can be processed by uploadUrl.js.
 * @param {*} audioFile - audio file recorded from mobile device supported file types: https://docs.assemblyai.com/#supported-languages
 */
// export default function uploadAudio(audioFile) {
    let args = process.argv.slice(2);
    let audioFile = args[0];
    
    // save audio file as data
    fs.readFile(audioFile, (err, data) => {
        if (err) {
            return console.log(err);
        }

        // Fetch API POST request
        const params = {
            headers: {
                authorization: process.env.ASSEMBLYAI_API_KEY,
                "Transfer-Encoding" : "chunked"
            },
            body: data,
            method: 'POST'
        };

        fetch(url, params)
            .then(response => response.json())
            .then(data => {
                console.log(`URL: ${data['upload_url']}`)
                return data['upload_url']
            })
            .catch((error) => {
                console.error(`Error: ${error}`);
            });
    });
    
// }
