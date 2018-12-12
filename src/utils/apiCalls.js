import * as scrape from './helpers';

export const fetchRandomPhotos = async () => {
  const url = `https://weatherlee-server.herokuapp.com/api/pixabay?q=nature&category=nature`;
  let response = await fetch(url);
  let result = await response.json();
  return scrape.scrapePhotos(result);
};

export const fetchWeather = async (lat, lng) => {
  const url = `https://weatherlee-server.herokuapp.com/api/darksky?latitude=${lat}&longitude=${lng}`;
  const response = await fetch(url, null);
  const result = await response.json();
  return scrape.scrapeWeather(result);
};

export const fetchNews = async () => {
  const url = `https://weatherlee-server.herokuapp.com/api/news`;
  const response = await fetch(url);
  const result = await response.json();
  return scrape.scrapeNews(result);
};
