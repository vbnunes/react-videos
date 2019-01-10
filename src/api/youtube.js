import axios from 'axios'

const KEY = 'AIzaSyBIL919MICoTYb7iqUujIfaoELHMVwFTX0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});