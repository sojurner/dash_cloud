import * as scrape from './helpers';

export const fetchRandomPhotos = async () => {
  const url = `https://weatherlee-server.herokuapp.com/api/pixabay?q=nature&category=nature`;
  let response = await fetch(url);
  let result = await response.json();
  return scrape.scrapePhotos(result);
};
};
