import React from 'react';
import Logo from '../../assets/img/Logo-Thalitaflix.png';
import Button from '../button';
import styles from './menu.module.css';

const Menu = () => {
  return (
    <nav className={styles.Menu}>
      <a href="/">
        <img className={styles.Logo} src={Logo} alt="Logo Thalitaflix" />
      </a>

      <Button className={styles.ButtonLink} href="/">Novo vídeo</Button>
    </nav>
  );
};

export default Menu;