import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID r9nTAkb0KLLOqTFF66u1eNiYlLxS9yt2xA85YsRHRYs'
    }
});
