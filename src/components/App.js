import { Component } from 'react';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import pixabayApi from '../services/pixabay-api';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    gallery: [],
    page: 1,
    searchQuery: '',
    showModal: false,
    modalImageUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchGallery();
    }

    if (prevState.page !== this.state.page) {
      this.scrollToNextPage();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  fetchGallery = () => {
    const { page, searchQuery } = this.state;

    pixabayApi.fetchGallery(searchQuery, page).then(images => {
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...images],
        page: prevState.page + 1,
      }));
    });
  };

  handleLoadMoreBtn = () => {
    this.fetchGallery();

    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = e => {
    const url = e.target.dataset.url;

    this.toggleModal();

    this.setState({ modalImageUrl: url });
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      gallery: [],
    });
  };

  scrollToNextPage = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { gallery, showModal, modalImageUrl } = this.state;

    return (
      <>
        <SearchBar onSubmitForm={this.onChangeQuery} />
        <main>
          <ImageGallery
            galleryPhotos={gallery}
            onOpenModal={this.handleOpenModal}
          />

          {gallery.length > 0 && <Button onLoadMore={this.fetchGallery} />}

          {showModal && (
            <Modal imageUrl={modalImageUrl} onCloseModal={this.toggleModal} />
          )}
        </main>
      </>
    );
  }
}
