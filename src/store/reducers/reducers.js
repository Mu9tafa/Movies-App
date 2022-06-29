import { combineReducers } from 'redux';
import changeFavoriteMovies from './favoriteReducer';
import moviesReducer from './moviesReducer';

export default combineReducers({
  favoriteMovies: changeFavoriteMovies,
  allMovies: moviesReducer,
});
