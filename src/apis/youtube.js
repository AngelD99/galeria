import axios from 'axios';
const KEY = 'AIzaSyDogZ91_SP47MPqy0VZLkMC5OXzvB1vepw'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 30,
        key: KEY
    }
})