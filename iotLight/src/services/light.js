import axios from 'axios';

const baseUrl = 'http://group2.exceed19.online/';

const getLights = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
    };

const getLight = (light_id) => {
    const request = axios.get(`${baseUrl}/${light_id}`);
    return request.then(response => response.data);
    };    

const updateLight = (light_id, status, mode, brightness) => {
    const request = axios.put(`http://group2.exceed19.online/update/${light_id}`, status, mode, brightness);
    return request.then(response => response.data);
    };
