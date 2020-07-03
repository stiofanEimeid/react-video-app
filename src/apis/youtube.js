import axios from 'axios';

const KEY = 'AIzaSyDrevnlntd9UdKYtrcBcDuBuZLYUBqjk_Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`,
        // query specified when we make
        // use of axios and send a query
        // to the youtube API
    }
});
