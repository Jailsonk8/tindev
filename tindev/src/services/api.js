import axios from 'axios';

const api = axios.create({
    baseURL: 'https://51114830.ngrok.io'
});

export default api;