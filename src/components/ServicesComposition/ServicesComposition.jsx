import React from 'react';
import './ServicesComposition.css';

import espumaImg from '../../assets/espuma.png';
import endolaserImg from '../../assets/laser.png';
import rostoImg from '../../assets/exames.png';
import clacsImg from '../../assets/vasos.png';

import unimed from '../../assets/unimed.svg';
import bradesco from '../../assets/bradesco.png';
import golden from '../../assets/golden-cross.png'

const servicesData = [
    { id: 'espuma', title: 'Escleroterapia Espuma com Laser', description: 'A Aplicação de Espuma Densa é uma técnica em que um medicamento especial, em forma de espuma, é injetado diretamente na veia, provocando seu fechamento. É um método rápido, que pode tratar até veias de médio e grande calibre, com ótimo resultado estético e funcional.', image: espumaImg },
    { id: 'endolaser', title: 'Cirurgia de varizes com Laser', description: 'O Tratamento de Varizes com Laser é uma técnica moderna e minimamente invasiva que utiliza energia de luz para fechar as veias doentes, melhorando a circulação e o aspecto das pernas. É rápido, seguro e não requer cortes, permitindo uma recuperação mais confortável.', image: endolaserImg },
    { id: 'rosto', title: 'Exames Ecodoppler', description: 'O Exame Ecodoppler é fundamental antes de iniciar qualquer tratamento. Ele utiliza ultrassom para visualizar as veias e avaliar o fluxo sanguíneo, permitindo identificar a causa do problema e escolher o procedimento mais adequado para cada paciente.', image: rostoImg },
    { id: 'clacs', title: 'Microcirurgia de varizes', description: 'O tratamento de varizes e microvasos é indicado para quem deseja eliminar aqueles vasinhos e veias mais visíveis que causam desconforto e afetam a estética. Com procedimentos seguros e eficazes, devolvemos às pernas uma aparência mais bonita e saudável.', image: clacsImg },
];

function ServicesComposition() {
  return (
    <section id="servicos" className="services-composition-section">
      <div className="section-title">
        <h2>Nossos Tratamentos</h2>
        <p className="desktop-subtitle">Passe o mouse sobre um tratamento para saber mais.</p>
        <p className="mobile-subtitle">Conheça nossos procedimentos e diferenciais.</p>
      </div>

      <div className="composition-container">
        {servicesData.map((service) => (
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

      <div className="convenios-container">
        <h4 className="convenios-title">Convênios Aceitos</h4>
        <div className="logos-container">
          <img src={unimed} alt="Unimed" />
          <img src={bradesco} alt="Bradesco Saúde" />
          <img src={golden} alt="Golden Cross" />
        </div>
      </div>
    </section>
  );
}

export default ServicesComposition;