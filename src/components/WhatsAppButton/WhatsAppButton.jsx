import React from 'react';
import './WhatsAppButton.css';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  const phoneNumber = '5522992236206';
  const message = 'Olá! Gostaria de agendar uma consulta na Clinivariz.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float-button" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactar via WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}

export default WhatsAppButton;