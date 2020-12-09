import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  return createPortal(
    <div className="Overlay">
      <div className="Modal">
        <img src="" alt="" />
      </div>
    </div>,
    modalRoot,
  );
}
