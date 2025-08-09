import React from 'react';
import Header from './components/Header/Header.jsx';
import AboutSection from './components/AboutSection/AboutSection.jsx';
import DoctorBioSection from './components/DoctorBioSection/DoctorBioSection.jsx';
import ServicesComposition from './components/ServicesComposition/ServicesComposition.jsx';
import ContactSection from './components/ContactSection/ContactSection.jsx';
import Footer from './components/Footer/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <DoctorBioSection />
      <ServicesComposition />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;