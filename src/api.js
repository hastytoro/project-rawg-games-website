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
// Date year, month and day methods.
const year = new Date().getFullYear();
const month = getMonth();
const day = getDay();
const currentDate = `${year}-${month}-${day}`;
const lastYear = `${year - 1}-${month}-${day}`;
const nextYear = `${year + 1}-${month}-${day}`;
// Date template strings
const date = "dates";
const ordering = "&ordering=-";
const page = "&page_size=10";
const popular = `${date}=${lastYear},${currentDate}${ordering}rating${page}`;
const upcoming = `${date}=${currentDate},${nextYear}${ordering}added${page}`;
const released = `${date}=${lastYear},${currentDate}${ordering}released${page}`;
// URL
export const popularUrl = () => `${base_url}?${apiKey}&${popular}`;
export const releasedUrl = () => `${base_url}?${apiKey}&${released}`;
export const upcomingUrl = () => `${base_url}?${apiKey}&${upcoming}`;

//GAME DETAILS
export const detailUrl = (id) => `${base_url}/${id}?${apiKey}`;
export const screenshotUrl = (id) => `${base_url}/${id}/screenshots?${apiKey}`;
// needs testing
export const searchURL = (name) => `${base_url}?${apiKey}&search=${name}`;
