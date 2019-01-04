import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-dbe81.firebaseio.com/'
});

export default instance;