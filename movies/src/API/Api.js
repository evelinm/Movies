import axios from 'axios';

const posterApi= axios.create({
    baseURL: "http://img.omdbapi.com/?i=tt3896198&h=600&apikey=e9a26f17"
});

export default posterApi;