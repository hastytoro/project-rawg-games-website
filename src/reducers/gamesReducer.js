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
    default:
      return { ...state };
  }
};

export default gamesReducer;
