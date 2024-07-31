import { combineReducers } from 'redux';
import reducer from './reducer';
import Movie from './movie';

const rootReducer = combineReducers({
  getNewArticle: reducer,
  getMovie: Movie
});

export default rootReducer;
