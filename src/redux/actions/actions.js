import { axiosInterceptors } from '../../utils/axios';
import { GET_NEW_ARTICLE_FAILED, GET_NEW_ARTICLE_PENDING, GET_NEW_ARTICLE_SUCCESS } from '../types';

export const getNewArticle = count => async dispatch => {
  try {
    dispatch({
      type: GET_NEW_ARTICLE_PENDING,
      payload: null
    });

    const res = await axiosInterceptors.get(`/api/blog?latest=${count}`);

    dispatch({
      type: GET_NEW_ARTICLE_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.message;
    }
    dispatch({
      type: GET_NEW_ARTICLE_FAILED,
      payload: error.message
    });
  }
};
