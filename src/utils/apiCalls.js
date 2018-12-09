export const fetchRandomPhotos = async () => {
  const url = `https://source.unsplash.com/random`;
  let response = await fetch(url);
  return response.url;
};
