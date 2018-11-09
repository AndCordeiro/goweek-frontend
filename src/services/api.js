import axios from 'axios';


const api = axios.create({
    baseURL: 'https://jyrayanode.herokuapp.com'
});

export default api;