import axios from 'axios';

const key = 'ba665fb2';

const configOMB = {
    baseURL: `http://www.omdbapi.com/`,
};

const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get('?i=tt3896198&apikey=ba665fb2').then(response => response.data)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get('?i=tt3896198&apikey=ba665fb2').then(response => response.data)
    }
};


export default API;
