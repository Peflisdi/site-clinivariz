import React from 'react';
import './Footer.css';
import logo from '../../assets/clinivariz-white.png';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-about">
          <img src={logo} alt="Clinivariz Logo" className="footer-logo" />
          <p>Cuidando da sua saúde vascular com tecnologia e dedicação há mais de 30 anos em Macaé.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/humberto.vladimir/" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Tratamentos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contato</h4>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>R. Ver. Abreu Lima, 60 - Centro, Macaé - RJ</span>
          </div>
          <div className="contact-item">
            <FaPhone />
            <span>(22) 2762-6171</span>
          </div>
          <div className="contact-item">
            <FaWhatsapp />
            <span>(22) 99223-6206</span>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <span>contato@drhumberto.com.br</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Clinivariz. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;