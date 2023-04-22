import React, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import styles from './Modal.module.css';

const Modal = () => {

  const { showModal, modalContent, hideModalHandler } = useContext(GlobalContext);

  return (
    <>
    {showModal && (
      <>
        <div className={styles.overlay}></div>
        <div className={styles.modalWrapper}>
          <div className={styles.infoModal}>
            <div>{modalContent}</div>
            <button onClick={hideModalHandler}>Fechar</button>
          </div>
        </div>
      </>
    )}
  </>
  );
};

export default Modal;
