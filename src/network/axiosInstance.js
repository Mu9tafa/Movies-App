import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'f903aef9ae724645859d230857ecb643',
  },
});

export default axiosInstance;
