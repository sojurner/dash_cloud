import * as scrape from './helpers';

export const fetchRandomPhotos = async () => {
  const url = `https://weatherlee-server.herokuapp.com/api/pixabay?q=nature&category=nature`;
  return scrape.scrapePhotos(await (await fetch(url)).json());
};

export const fetchWeather = async (lat, lng) => {
  const url = `https://weatherlee-server.herokuapp.com/api/darksky?latitude=${lat}&longitude=${lng}`;
  return scrape.scrapeWeather(await (await fetch(url, null)).json());
};

export const fetchNews = async () => {
  const url = `https://weatherlee-server.herokuapp.com/api/news`;
  return scrape.scrapeNews(await (await fetch(url)).json());
};
