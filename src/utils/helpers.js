import * as moment from 'moment';

export const scrapeWeather = raw => {
  const {
    sunriseTime,
    sunsetTime,
    temperatureHigh,
    temperatureLow
  } = raw.daily.data[0];
  return {
    location: raw.timezone,
    temperature: `${Math.floor(raw.currently.temperature)}°`,
    high: `${Math.floor(temperatureHigh)}°`,
    low: `${Math.floor(temperatureLow)}°`,
    sunrise: moment(sunriseTime).format('h:mm a'),
    sunset: moment(sunsetTime).format('h:mm a')
  };
};

export const scrapePhotos = raw => {
  return raw.hits.map(hit => hit.largeImageURL);
};

export const scrapeNews = news => {
  return news.articles.map(article => {
    const { title, url, urlToImage, source } = article;
    const newsTitle = title.slice(0, title.indexOf('-'));
    console.log(newsTitle);
    return {
      title: newsTitle,
      url,
      urlToImage,
      src: source.name
    };
  });
};
