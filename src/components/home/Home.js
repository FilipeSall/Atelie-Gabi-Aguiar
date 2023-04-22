import React from 'react';
import styles from './Home.module.css';
import homeImg from '../../assets/images/homePic.webp';
import LinkBtn from '../btn/LinkBtn';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import Panel from '../panel/Panel';

function Main() {
  const phoneNumber = 5561985376261;
  const preformattedText = 'Olá, Gabi. Estou interessada(o) em seus serviços!';
  const encodedText = encodeURIComponent(preformattedText);
  const href = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  return (
    <main className={styles.container}>
      <div className={styles.infoContainer}>
        <h1>
          Tudo pela beleza que você <span className={styles.accent}>merece!</span>
        </h1>
        <p>
          Ateliê Gabi Aguiar: O seu espaço de estética personalizado para realçar
          sua beleza natural
        </p>
        <div className={styles.panelsContainer}>
          <Panel num="Equipamentos" text="de última geração" />
          <Panel num="Ambiente" text="aconchegante e relaxante" />
          <Panel num="+3 anos" text="de experiência com estética" />
        </div>
        <div className={styles.btn__wrapper}>
          <LinkBtn
            text="CONTATAR"
            path={href}
            classBtn="wpp"
            icon={<BsWhatsapp />}
          />
          <LinkBtn
            path="https://www.instagram.com/ateliegabiaguiar/"
            classBtn="insta"
            text=""
            icon={<BsInstagram />}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src={homeImg} alt="Gabi Aguiar" />
      </div>
    </main>
  );
}

export default Main;
