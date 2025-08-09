// src/components/ServicesComposition/ServicesComposition.jsx

import React from 'react';
import './ServicesComposition.css';

// Os dados continuam os mesmos, mas as imagens agora serão usadas como fundo.
import espumaImg from '../../assets/servico-espuma.jpg';
import endolaserImg from '../../assets/servico-endolaser.jpg';
import rostoImg from '../../assets/servico-rosto.jpg';
import clacsImg from '../../assets/servico-clacs.jpg';

const servicesData = [
    { id: 'espuma', title: 'Tratamento com Espuma Densa', description: 'A escleroterapia com espuma densa é um tratamento eficaz para a eliminação completa das varizes...', image: espumaImg },
    { id: 'endolaser', title: 'Tratamento com Endolaser', description: 'O endolaser é um método amplamente adotado para o tratamento de veias safenas e varizes calibrosas...', image: endolaserImg },
    { id: 'rosto', title: 'Vasinhos no Rosto', description: 'O aparecimento de vasinhos no rosto é uma preocupação estética para muitos. A boa notícia é que estes vasos são tratados com laser Transdermico...', image: rostoImg },
    { id: 'clacs', title: 'Tratamento com Laser - CLACS', description: 'O Laser Transdérmico representa uma revolução no tratamento de varizes de menor calibre...', image: clacsImg },
];

function ServicesComposition() {
  return (
    <section id="servicos" className="services-composition-section">
      <div className="section-title">
        <h2>Nossos Tratamentos</h2>
        <p>Passe o mouse sobre um tratamento para saber mais.</p>
      </div>

      <div className="composition-container">
        {servicesData.map((service) => (
          // Cada cartão terá sua própria imagem de fundo definida no CSS.
          <div
            key={service.id}
            className="service-card"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesComposition;