import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/lights';

const getLights = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
    };

const getLight = (light_id){
    const request = axios.get(`${baseUrl}/${light_id}`);
} 

