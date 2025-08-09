// src/App.jsx

import Header from './components/Header/Header.jsx';
import AboutSection from './components/AboutSection/AboutSection.jsx';
import ServicesComposition from './components/ServicesComposition/ServicesComposition.jsx';
import ContactSection from './components/ContactSection/ContactSection.jsx'; // 1. Importe
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <ServicesComposition />
      <ContactSection /> {/* 2. Adicione no final */}
    </div>
  );
}

export default App;