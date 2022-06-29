export const addToFavorite = (payload) => {
  return {
    type: 'ADD_TO_FAVORITE',
    payload,
  };
};
export const removeFromFavorite = (payload) => {
  return {
    type: 'REMOVE_FROM_FAVORITE',
    payload,
  };
};

export const setFavoriteLanguage = (payload) => {
  return {
    type: 'SET_FAVORITE_LANGUAGE',
    payload,
  };
};
