/* eslint-disable no-param-reassign */
import axios from 'axios';

const baseURL = 'https://api.themoviedb.org';

const axiosInterceptors = axios.create({
  baseURL
});

axiosInterceptors.interceptors.request.use(
  config => {
    config.headers.Authorization =
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWM2ZTc5MDBiZmVkMWMwY2MzYmI2MTMzMzdiMGM2NCIsIm5iZiI6MTcxOTM4NjkyNC45MzM3NjYsInN1YiI6IjY0ODcwNTQ4ZDJiMjA5MDBjYTIwOGU1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eFnrrGz_BYzJc9WQXeV9QpAPuRUwAxxzGnvX9laaXOA';
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInterceptors.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export { axiosInterceptors };
