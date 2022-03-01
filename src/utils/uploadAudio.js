// USEFUL LINKS
// https://www.assemblyai.com/blog/uploading-files-to-assemblyai-using-node-js-and-javascript/
// https://github.com/AssemblyAI/nodejs-getting-started-stt/blob/main/upload.js
// https://www.assemblyai.com/blog/getting-started-with-speech-to-text-transcriptions-with-assemblyai-javascript-and-node-js/
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://docs.assemblyai.com/walkthroughs#authentication
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding

require('dotenv').config();
const fetch = require("node-fetch"); // fetch api calls
const fs = require("fs"); // file stream
const url = "https://api.assemblyai.com/v2/upload"; // assemblyai api endpoint

export default function uploadAudio(audioFile) {

    // save audio file as data
    fs.readFile(audioFile, (err, data) => {
        if (err) {
            return console.log(err);
        }
    })
    
    // Fetch API POST request
    const params = {
        headers: {
          "authorization": process.env.ASSEMBLYAI_API_KEY,
          "Transfer-Encoding" : "chunked"
        },
        body: data,
        method: 'POST'
    };
}


