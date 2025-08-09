import React from 'react';
import './AboutSection.css';

import Foto from '../../assets/Dr.Humberto.png';

function AboutSection() {
  return (
    <section id="sobre" className="about-section">
      {/* <div className="glass-card"> */}
        <div className="about-container">
          <div className="about-text-content">
            <h2 className="title">Dr. Humberto</h2>
            <h3 className="subtitle">Angiologista e Cirurgião Vascular</h3>
            <div className="divider"></div>
            <p className="description">
              Experiência de mais de 20 anos no tratamento da doença vascular.
            </p>
            <p className="description">
              Referência na região no Tratamento do Lipedema.
            </p>
            <a href="#contato" className="cta-button">
              Agende sua Consulta
            </a>
          </div>
          <div className="about-image-content">
            <img 
             src={Foto}
              alt="Dr. Humberto - Angiologista" 
              className="doctor-photo"
            />
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}

export default AboutSection;