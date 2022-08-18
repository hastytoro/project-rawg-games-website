// You always require initial state.
const initState = {
  popular: [],
  released: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        released: action.payload.released,
        upcoming: action.payload.upcoming,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state }; // return whatever is in state if nothing works out.
  }
};

export default gamesReducer;
