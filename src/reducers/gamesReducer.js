const init = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = init, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
      break;

    default:
      return { ...state };
  }
};

export default gamesReducer;
