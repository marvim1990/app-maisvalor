import axios from  'axios'

const api = axios.create({
    baseURL:'http://172.16.0.191:3000',

});

export default api;