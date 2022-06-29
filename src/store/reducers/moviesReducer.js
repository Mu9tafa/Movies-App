const INITIAL_STATE = {
  list: [],
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_ALL_MOVIES':
      return {
        ...state,
        list: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};
export default moviesReducer;
