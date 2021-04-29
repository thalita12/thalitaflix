import React from 'react';
import Logo from '../../assets/img/Logo-Thalitaflix.png';
import { FooterBase } from './styles';

const Footer = () => {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Logo} alt="Logo Thalitaflix" />
      </a>

      <p>
        de Mato Grosso do Sul para o mundo 🚀
      </p>
    </FooterBase>
  );
};

export default Footer;
