import { axiosInterceptors } from '../../utils/axios';
import { GET_MOVIE_FAILED, GET_MOVIE_PENDING, GET_MOVIE_SUCCESS } from '../types';

export const getMovie = page => async dispatch => {
  try {
    dispatch({
      type: GET_MOVIE_PENDING,
      payload: null
    });

    const res = await axiosInterceptors.get(
      `/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
    );

    dispatch({
      type: GET_MOVIE_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.message;
    }
    dispatch({
      type: GET_MOVIE_FAILED,
      payload: error.message
    });
  }
};
