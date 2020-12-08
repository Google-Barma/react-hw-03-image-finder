import { Component } from 'react';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import galleryApi from '../services/galleryApi';

export default class App extends Component {
  state = {
    page: 1,
    query: '',
    gallery: [],
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const { page, query } = this.state;

  //   if (prevState.query !== query) {
  //   }
  // }

  fetchData = () => {
    const { page, query } = this.state;

    galleryApi.fetchGallery(query, page).then(res => {
      this.setState(prevState => ({ gallery: [...prevState.gallery, ...res] }));
      console.log(this.state.gallery);
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.fetchData();
  };

  handleChangeQuery = e => {
    const query = e.currentTarget.value;

    this.setState({ query: query });
  };

  render() {
    return (
      <>
        <SearchBar
          onSubmitForm={this.handleSubmit}
          onChangeQuery={this.handleChangeQuery}
        />
        <main>
          <ImageGallery>
            <ImageGalleryItem />
          </ImageGallery>
        </main>
      </>
    );
  }
}
