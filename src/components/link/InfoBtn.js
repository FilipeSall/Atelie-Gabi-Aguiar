import React, { useContext } from 'react';
import { FcAbout } from "react-icons/fc";
import { GlobalContext } from '../../GlobalContext';
import Modal from '../modal/Modal';
import styles from './Button.module.css';

function InfoBtn(modalInfo) {

    const { showModalHandler } = useContext(GlobalContext);

    return (
        <>
        <button className={styles.infoBtn} onClick={() => showModalHandler(modalInfo)}>
            {<FcAbout size={20} />}
        </button>
        <Modal /> 
    </>
    )
}

export default InfoBtn