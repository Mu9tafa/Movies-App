const INITIAL_STATE = {
  favoriteMoviesIDs: [],
  favoriteMoviesIDsAr: [],
};

const changeFavoriteMovies = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        favoriteMoviesIDs: [...state.favoriteMoviesIDs, action.payload],
        favoriteMoviesIDsAr: [...state.favoriteMoviesIDsAr, action.payload.id],
      };
      break;
    case 'REMOVE_FROM_FAVORITE':
      let newArr = state.favoriteMoviesIDs.filter(
        (item) => item.id !== action.payload.id
      );
      let myIDs = [];
      let newArrAR = newArr.filter((movie) => {
        myIDs.push(movie.id);
        return myIDs;
      });
      return {
        favoriteMoviesIDs: newArr,
        favoriteMoviesIDsAr: myIDs,
      };
      break;
    case 'SET_FAVORITE_LANGUAGE':
      return {
        favoriteMoviesIDs: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default changeFavoriteMovies;
