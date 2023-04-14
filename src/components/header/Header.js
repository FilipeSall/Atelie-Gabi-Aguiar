import React from 'react';
import Button from '../link/Button';
import Logo from '../../assets/images/logo.webp'; 
import styles from './Header.module.css';

function Header() {


    const btns = [
        {
            text:'Home',
            path:'/',
        },
        {
            text:'Galeria',
            path:'/galery'
        },
        {
            text:'Serviços',
            path:'/services'
        },
        {
            text:'Sobre',
            path:'/about'
        }
    ]

    return (
        <header className={styles.container}>
            <img src={Logo} alt='logo Gabi atelie aguiar' className={styles.logo}/>
            <div className={styles.button__wrapper}>
                {btns.map((btn, i) => (
                    <Button
                    text={btn.text}
                    path={btn.path}
                    key={i}
                    />
                ))}
            </div>
        </header>
    )
}

export default Header;
