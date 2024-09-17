import { forwardRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = function Modal({ children, open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open])

  // La dipendenza nell'array fa si che l'array parta solo quando open cambia, gli dice parti quando le dipendenze ci sono.

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
