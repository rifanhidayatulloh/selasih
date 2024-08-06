import { apiFunction } from '../../utils/axios';
import { GET_NEW_ARTICLE_FAILED, GET_NEW_ARTICLE_PENDING, GET_NEW_ARTICLE_SUCCESS } from '../types';

export const getNewArticle = id => async dispatch => {
  try {
    dispatch({
      type: GET_NEW_ARTICLE_PENDING,
      payload: null
    });

    const res = await apiFunction('https://api.themoviedb.org').get(`/3/network/${id}`);
    // console.log(res);

    dispatch({
      type: GET_NEW_ARTICLE_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response;
    }
    dispatch({
      type: GET_NEW_ARTICLE_FAILED,
      payload: error.message
    });
  }
};
