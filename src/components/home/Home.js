import React from 'react';
import styles from './Home.module.css';
import homeImg from '../../assets/images/homePic.webp';
import LinkBtn from '../btn/LinkBtn';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import Panel from '../panel/Panel';
import girlSvg from '../../assets/images/girlsvg.svg';
import careSvg from '../../assets/images/caresvg.svg';
import experienceSvg from '../../assets/images/experiencesvg.svg';

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
          <Panel num="Cuidado & Carinho" text="Nossos tratamentos são realizados com amor e cuidado, pensando no bem-estar e na beleza da mulher" icon={<img src={careSvg} alt='Icone de cuidado e amor' />}/>
          <Panel num="Estética Feminina" text="Serviços de beleza especializados em mulheres, com técnicas e produtos de alta qualidade" icon={<img src={girlSvg} alt='icone de mulher estilosa'/>  }/>
          <Panel num="Experiência & Dedicação" text="Com mais de 3 anos de atuação na área de estética, é garantido que cada cliente saia do seu espaço se sentindo renovado e radiante." icon={<img src={experienceSvg} alt='icone de mulher graduada' />}/>
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
