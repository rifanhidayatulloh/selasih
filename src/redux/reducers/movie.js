import { GET_MOVIE_FAILED, GET_MOVIE_PENDING, GET_MOVIE_SUCCESS } from '../types';

const initialState = {
  isLoading: true,
  isError: false,
  data: {},
  error: null
};

const Movie = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_PENDING:
      return { ...state, isLoading: true };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case GET_MOVIE_FAILED:
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

export default Movie;
