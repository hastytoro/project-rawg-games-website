//Base URL
const category = "games";
const base_url = `https://api.rawg.io/api/${category}`;
const apiKey = `key=${process.env.REACT_APP_RAWG}`;

// Get current date logic
const getMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};
const getDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};
// current
const year = new Date().getFullYear();
const month = getMonth();
const day = getDay();
const currentDate = `${year}-${month}-${day}`;
const lastYear = `${year - 1}-${month}-${day}`;
const nextYear = `${year + 1}-${month}-${day}`;

// Popular games url
const date = "dates";
const ordering = "&ordering=-";
const page = "&page_size=10";
const popular = `${date}=${lastYear},${currentDate}${ordering}rating${page}`;
const upcoming = `${date}=${currentDate},${nextYear}${ordering}added${page}`;
const released = `${date}=${lastYear},${currentDate}${ordering}released${page}`;

export const popularGamesURL = () => `${base_url}?${apiKey}&${popular}`;
export const releasedGamesURL = () => `${base_url}?${apiKey}&${released}`;
export const upcomingGamesURL = () => `${base_url}?${apiKey}&${upcoming}`;

// //Getting the date
// const getCurrentMonth = () => {
//   const month = new Date().getMonth() + 1;
//   if (month < 10) {
//     return `0${month}`;
//   } else {
//     return month;
//   }
// };
// //Getting the date
// const getCurrentDay = () => {
//   const day = new Date().getDate();
//   if (day < 10) {
//     return `0${day}`;
//   } else {
//     return day;
//   }
// };

// //Current day/month/year
// const currentYear = new Date().getFullYear();
// const currentMonth = getCurrentMonth();
// const currentDay = getCurrentDay();
// const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// //Popular Games
// const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
// const upcoming = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
// const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

// export const popularGamesURL = () => `${base_url}${popular_games}`;
// export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
// export const newGamesURL = () => `${base_url}${newGames}`;
// //GAME DETAILS
// export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
// //Game ScreenShots
// export const gameScreenshotURL = (game_id) =>
//   `${base_url}games/${game_id}/screenshots`;
// //Searched game
// export const searchGameURL = (game_name) =>
//   `${base_url}games?search=${game_name}&page_size=9`;
