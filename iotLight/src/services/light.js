import axios from 'axios';

const baseUrl = 'http://group2.exceed19.online/';

export const getLights = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
    };

export const getLight = async (light_id) => {
    const request = await axios.get(`${baseUrl}${light_id}`);
    return request.data;
    };    

export const updateLightMode = async (body) => {
    try{
        const request = await axios.put(`http://group2.exceed19.online/update/`, body);
        return request.data;
    }catch(err) {
        console.log(err)
    }

};
