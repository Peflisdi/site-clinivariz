import React from 'react';
import './AboutSection.css';

import legImage from '../../assets/pernas.png';

function AboutSection() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-text-content">
          <h2 className="title">Dr. Humberto</h2>
          <h3 className="subtitle">Angiologista e Cirurgião Vascular</h3>
          <div className="divider"></div>
          <p className="description">
            Experiência de mais de 30 anos no tratamento da doença vascular.
          </p>
          <p className="description">
            Referência na região de Macaé - RJ.
          </p>
          <a href="#contato" className="cta-button">
            Agende sua Consulta
          </a>
        </div>
      </div>
      <img 
        src={legImage} 
        alt="Decoração de perna saudável" 
        className="leg-image-decoration" 
      />
    </section>
  );
}

export default AboutSection;