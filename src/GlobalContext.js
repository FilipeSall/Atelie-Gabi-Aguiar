import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const showModalHandler = (content) => {
    setShowModal(true);
    setModalContent(content.modalInfo);
  };

  const hideModalHandler = () => {
    setShowModal(false);
    setModalContent('');
  };

  return (
    <GlobalContext.Provider value={{ showModal, modalContent, showModalHandler, hideModalHandler }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
