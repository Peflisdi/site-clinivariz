// Em: src/components/Header/Header.jsx

import React from 'react';
import './Header.css';
// 1. Importe a imagem do logo
import logo from '../../assets/clinivariz-orange.png';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          {/* 2. Substitua o <h1> pela tag <img> */}
          <img src={logo} alt="Logo da Clinivariz" className="site-logo" />
        </div>
        <nav className="navigation">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Tratamentos</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;