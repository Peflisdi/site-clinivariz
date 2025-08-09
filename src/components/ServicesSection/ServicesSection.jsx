// src/components/ServicesSection/ServicesSection.jsx

import React, { useState } from 'react';
import './ServicesSection.css';

// Importando as imagens que preparamos
import espumaImg from '../../assets/servico-espuma.jpg';
import endolaserImg from '../../assets/servico-endolaser.jpg';
import rostoImg from '../../assets/servico-rosto.jpg';
import clacsImg from '../../assets/servico-clacs.jpg';

// 1. DADOS DOS SERVIÇOS:
// É uma ótima prática manter os dados organizados em um array.
const servicesData = [
  {
    id: 'espuma',
    title: 'Tratamento de Varizes com Espuma Densa',
    description: 'A escleroterapia com espuma densa é um tratamento eficaz para a eliminação completa das varizes. Essa técnica envolve a aplicação direta de uma substância esclerosante em forma de espuma nas varizes. Os resultados são notados imediatamente, e o melhor de tudo é que não é preciso se submeter a um período de repouso.',
    image: espumaImg,
  },
  {
    id: 'endolaser',
    title: 'Tratamento de Varizes com Endolaser - ATTA',
    description: 'O endolaser é um método amplamente adotado para o tratamento de veias safenas e varizes calibrosas. Uma de suas principais vantagens é a menor invasividade em comparação com a cirurgia tradicional, podendo ser realizado no próprio consultório médico. Além disso, não é necessário um período de repouso, e o procedimento é realizado sob anestesia local e sedação.',
    image: endolaserImg,
  },
  {
    id: 'rosto',
    title: 'Tratamento de Vasinhos no Rosto',
    description: 'O aparecimento de vasinhos no rosto é uma preocupação estética para muitos. A boa notícia é que estes vasos são tratados com laser Transdermico, um procedimento minimamente invasivo e com excelentes resultados! Já na primeira sessão é possível ver um resultado fantástico!',
    image: rostoImg,
  },
  {
    id: 'clacs',
    title: 'Tratamento de varizes com laser - CLACS',
    description: 'O Laser Transdérmico representa uma revolução no tratamento de varizes de menor calibre. Sua associação à Escleroterapia convencional nos capacita a abordar tanto as microvarizes quanto as veias nutridoras diretamente no consultório médico.',
    image: clacsImg,
  },
];

function ServicesSection() {
  // 2. ESTADO DO REACT:
  // 'activeService' vai guardar o 'id' do serviço que está ativo.
  // Começamos com o primeiro serviço da lista.
  const [activeService, setActiveService] = useState(servicesData[0].id);

  // 3. ENCONTRAR O SERVIÇO ATIVO:
  // Com base no 'id' que está no estado, encontramos o objeto completo do serviço.
  const serviceInfo = servicesData.find(s => s.id === activeService);

  return (
    <section id="servicos" className="services-section">
      <div className="section-title">
        <h2>Tratamentos Especializados</h2>
        <p>Tecnologia e cuidado para o seu bem-estar vascular.</p>
      </div>

      <div className="services-container">
        {/* COLUNA DA ESQUERDA: A lista de serviços (nosso menu) */}
        <div className="service-list">
          {servicesData.map((service) => (
            <button
              key={service.id}
              className={`service-item ${service.id === activeService ? 'active' : ''}`}
              onClick={() => setActiveService(service.id)}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* COLUNA DA DIREITA: Os detalhes do serviço ativo */}
        <div className="service-details">
          {serviceInfo && (
            <>
              <img src={serviceInfo.image} alt={serviceInfo.title} className="service-image" />
              <div className="service-content">
                <h3 className="service-title">{serviceInfo.title}</h3>
                <p className="service-description">{serviceInfo.description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;