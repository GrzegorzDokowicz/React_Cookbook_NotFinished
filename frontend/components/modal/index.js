import React from 'react';
import './style.scss';

const Modal = ({isOpen, children, onClose}) => {
    const clickOverlay = ($event) => {
        if ($event.target === $event.currentTarget && onClose) {
            onClose();
        }
    };

    return <div className={`modal ${isOpen ? 'modal--open' : ''}`} onClick={clickOverlay}>
        <div className="modal__content">
            {children}
        </div>
    </div>;
};


export default Modal;
