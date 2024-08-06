import { GET_NEW_ARTICLE_FAILED, GET_NEW_ARTICLE_PENDING, GET_NEW_ARTICLE_SUCCESS } from '../types';

const initialState = {
  isLoading: true,
  isError: false,
  data: {},
  error: null
};

const NewArticle = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_ARTICLE_PENDING:
      return { ...state, isLoading: true };
    case GET_NEW_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case GET_NEW_ARTICLE_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      };
    default:
      return state;
  }
};

export default NewArticle;
