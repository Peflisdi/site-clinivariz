import React, { useState } from 'react';
import './ContactSection.css';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function ContactSection() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const phoneNumber = '5522992236206';
    
    let messageBody = `Olá! Meu nome é ${nome}.\n`;
    if (email) messageBody += `Email: ${email}\n`;
    if (assunto) messageBody += `Assunto: ${assunto}\n\n`;
    if (mensagem) messageBody += `${mensagem}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageBody)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="contact-section">
      <div className="section-title">
        <h2>Entre em Contato</h2>
        <p>Estamos à sua disposição para agendar uma consulta ou esclarecer dúvidas.</p>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.870889262174!2d-41.78018182470197!3d-22.358500279399127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbda9f77f15454b%3A0x7c73229b7a3a30c5!2sR.%20Ver.%20Abreu%20Lima%2C%2060%20-%20Centro%2C%20Maca%C3%A9%20-%20RJ%2C%2027916-020!5e0!3m2!1spt-BR!2sbr!4v1723161821415!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-content-wrapper">
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Endereço</h4>
              <p>R. Ver. Abreu Lima, 60 - Centro, Macaé - RJ, 27916-020</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h4>Telefone Fixo</h4>
              <p>(22) 2762-6171</p>
            </div>
          </div>
          <div className="info-item">
            <FaWhatsapp className="info-icon" />
            <div>
              <h4>WhatsApp</h4>
              <p>(22) 99223-6206</p>
            </div>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>contato@drhumberto.com.br</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group form-group-half">
            <input 
              type="text" 
              placeholder="Seu Nome" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required 
            />
            <input 
              type="email" 
              placeholder="Seu Email (Opcional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Assunto"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Sua Mensagem (opcional)" 
              rows="5"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar via WhatsApp</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;