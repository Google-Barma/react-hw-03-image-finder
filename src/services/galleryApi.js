import axios from 'axios';

const galleryApi = {
  API_KEY: '13118160-85f169275baea695b5828e8ed',

  async fetchGallery(query, pageNumber) {
    return await axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(({ data }) => data.hits)
      .then(result =>
        result.map(({ id, largeImageURL, webformatURL }) => ({
          id,
          largeImageURL,
          webformatURL,
        })),
      );
  },
};

export default galleryApi;
