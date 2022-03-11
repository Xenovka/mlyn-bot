const { default: axios } = require("axios");

module.exports = async (keyword) => {
  try {
    const fetchAnimeGIF = await axios.get(
      `https://kawaii.red/api/gif/${keyword}/token=${process.env.ANIME_IMAGE_API_KEY}/`
    );
    const animeGIF = await fetchAnimeGIF.data;

    return animeGIF.response;
  } catch (error) {
    channel.send("Error occured when trying to get the image.");
  }
};
