import axios from "axios";

var $host = axios.create({
    baseURL: 'http://localhost:5000/' //import.meta.env.REACT_APP_API_URL
});

var $authHost = axios.create({
    baseURL: 'http://localhost:5000/' //import.meta.env.REACT_APP_API_URL
});

// добавить authInterceptor на $authHost

export {
    $host,
    $authHost
};
