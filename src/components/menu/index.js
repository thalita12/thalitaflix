import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import Button from '../button';
import styles from './menu.module.css';

export default function Menu() {
  return (
    <nav className={styles.Menu}>
      <a href="/">
        <img className={styles.Logo} src={Logo} alt="Logo do site" />
      </a>

      <Button className={styles.ButtonLink} href="/">Novo vídeo</Button>
    </nav>
  );
}