import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common[ 'authorization' ] = 'AUTH TOKEN FROM INSTANCE';



export default instance;