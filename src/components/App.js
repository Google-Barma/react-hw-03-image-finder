import { Component } from 'react';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import galleryApi from '../services/gallery-api';
import Button from './Button/Button';

export default class App extends Component {
  state = {
    gallery: [],
    page: 1,
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchGallery();
    }
  }

  fetchGallery = () => {
    const { page, searchQuery } = this.state;

    galleryApi.fetchGallery(searchQuery, page).then(images => {
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...images],
        page: prevState.page + 1,
      }));
    });
  };

  onChangeQuery = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { gallery } = this.state;

    return (
      <>
        <SearchBar onSubmitForm={this.onChangeQuery} />
        <main>
          <ImageGallery galleryPhotos={gallery} />

          {gallery.length > 0 && <Button />}
        </main>
      </>
    );
  }
}
