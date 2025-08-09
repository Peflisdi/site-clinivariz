import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './DoctorBioSection.css';

import doctorPhoto from '../../assets/Dr.Humberto.png';

function DoctorBioSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="doctor-bio-section" ref={ref}>
      <div className="bio-container">
        <div className="bio-image-content">
          <img 
            src={doctorPhoto} 
            alt="Dr. Humberto Mena Lazo" 
            className="bio-doctor-photo"
          />
        </div>
        <div className="bio-text-content">
          <h2 className="bio-title">Dr. Humberto Mena Lazo</h2>
          <div className="bio-divider"></div>
          <p className="bio-description">
            Humberto Vladimir Mena Lazo, nascido em 28 de maio de 1955, em La Paz, Bolívia, é médico formado há mais de 30 anos pela Universidade Maior de San Andrés (UMSA). Especializou-se em cirurgia geral, sendo um dos primeiros no país a obter o título de especialista concedido pelo órgão equivalente ao Colégio Brasileiro de Cirurgiões. Atuou como residente em cirurgia torácica, cardíaca e vascular periférica no Instituto Nacional de Tórax e como professor assistente na UMSA.
          </p>
          <p className="bio-description">
            Com bolsa da CAPES, realizou Mestrado em Cirurgia na UFMG, no Brasil, revalidando seu diploma médico. Há cerca de 20 anos, fixou-se em Macaé (RJ), sendo pioneiro em angiologia e cirurgia vascular na Casa de Caridade local. Aperfeiçoou-se em ecodoppler vascular, participou regularmente dos congressos da SBACV.
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">
                +<CountUp start={0} end={inView ? 30 : 0} duration={2.5} />
              </span>
              <p className="stat-label">Anos de Experiência</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                +<CountUp start={0} end={inView ? 10000 : 0} duration={3} separator="." />
              </span>
              <p className="stat-label">Pacientes Atendidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorBioSection;