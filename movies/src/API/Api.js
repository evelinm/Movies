import axios from 'axios';

const posterApi= axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default posterApi;