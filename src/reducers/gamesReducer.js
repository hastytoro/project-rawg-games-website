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

// ACTION CREATOR EXAMPLE
const fetchGames = (data) => {
  return {
    type: "FETCH_GAMES",
    payload: data,
  };
};

export default gamesReducer;
