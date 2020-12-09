import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.imageUrl} alt="" />
        </div>
        <button type="button" onClick={() => this.props.onCloseModal()}>
          Close
        </button>
      </div>,
      modalRoot,
    );
  }
}
