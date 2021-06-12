import React from 'react';
import styles from './css/Modal.module.css';

const Modal = (props) => {
  const toggleModalHandler = () => {
    props.toggleModalHandler();
  };

  return (
    <div
      className={`${props.showModal ? styles.hide : styles.modal}`}
      onClick={toggleModalHandler}
    >
      <div className={`${props.showModal ? '' : styles.show}`}>
        {props.enteredUserName.trim().length === 0
          ? 'Username cannot be empty.'
          : ''}
        {props.enteredAge <= 1 ? 'Age must be greater than 1.' : ''}
      </div>
    </div>
  );
};

export default Modal;
