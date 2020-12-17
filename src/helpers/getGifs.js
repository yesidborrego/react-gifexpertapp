export const getGifs = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=3yJxG1eWVr3RGqfAXvcbQq8KjyQ572iE`;
  const res = await fetch(URL);
  const { data } = await res.json();

  const gifs = data.map( image => {
    return {
      id: image.id,
      title: image.title,
      url: image.images?.downsized_medium.url,
    }
  });

  return gifs;
}