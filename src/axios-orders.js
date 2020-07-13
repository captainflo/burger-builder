import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-66574.firebaseio.com/',
});

export default instance;
