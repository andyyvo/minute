// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://docs.assemblyai.com/walkthroughs#authentication

const axios = require('axios');

export default function assemblyaiAuth() {
    axios.get('https://api.assemblyai.com/v2/')
}