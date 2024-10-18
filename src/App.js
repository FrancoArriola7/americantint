import React, { useState, useEffect } from 'react';
import './App.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Flag from 'react-world-flags';

const images = [
  require('./assets/marmoleado.png'),
  require('./assets/colorido.png'),
  require('./assets/fondo3.png')
];

const texts = {
  en: {
    comingSoon: "Coming Soon",
    subtitle: "Our website is under construction. Stay tuned for updates!",
    home: "Home",
    about: "About Us",
    contact: "Contact Us",
  },
  es: {
    comingSoon: "Próximamente",
    subtitle: "Nuestro sitio web está en construcción. ¡Mantente al tanto!",
    home: "Inicio",
    about: "Sobre Nosotros",
    contact: "Contáctanos"
  },
  pt: {
    comingSoon: "Em Breve",
    subtitle: "Nosso site está em construção. Fique atento às novidades!",
    home: "Início",
    about: "Sobre Nós",
    contact: "Contate-nos",
  }
};

const flagCodes = {
  en: 'GB', // Reino Unido como representante del inglés
  es: 'ES', // España
  pt: 'BR'  // Brasil
};

// Componente Typewriter para el efecto de máquina de escribir
function Typewriter({ text, speed }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayText(''); // Reinicia el texto al inicio del efecto
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => text.substring(0, index + 1)); // Actualiza con una porción del texto
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayText}</span>;
}

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['Home', 'About Us'];
  const [language, setLanguage] = useState('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Controla el menú desplegable

  const flagCodes = {
    en: 'GB',
    es: 'ES',
    pt: 'PT'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 6000); // Cambia la imagen cada 6 segundos
    return () => clearInterval(interval);
  }, []);

  // Función para hacer scroll a la sección seleccionada
  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('.section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(index);
    }
  };

  // Maneja el evento de la rueda del mouse para hacer scroll entre secciones
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0 && currentSection < 3) {
        // Scroll hacia abajo
        scrollToSection(currentSection + 1);
      } else if (event.deltaY < 0 && currentSection > 0) {
        // Scroll hacia arriba
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSection]);

  // Función para cambiar de idioma
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false); // Cierra el menú desplegable al seleccionar un idioma
  };
  return (
    <div>
      {/* Menú lateral */}
      <nav className="side-menu">
        {['home', 'about'].map((key, index) => (
          <div
            key={index}
            className={`menu-item ${currentSection === index ? 'active' : ''}`}
            onClick={() => scrollToSection(index)}
          >
            <div className="menu-indicator"></div>
            <div className="menu-label">
              <span>{texts[language][key]}</span>
            </div>
          </div>
        ))}
      </nav>

      {/* Sección de inicio */}
      <div className="section background" style={{ backgroundImage: `url(${images[currentImage]})` }}>
        <header className="header">
          <div className="logo">American Tint</div>
          <div className="language-switcher" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Flag code={flagCodes[language]} alt="flag" className="flag-icon" />
            <span className="language-name">{language === 'en' ? 'English' : language === 'es' ? 'Español' : 'Português'}</span>
            {isDropdownOpen ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
            {isDropdownOpen && (
              <div className="dropdown">
                {Object.keys(texts).map((lang) => (
                  <div key={lang} className="dropdown-item" onClick={() => changeLanguage(lang)}>
                    <div className="flag-container">
                      <Flag code={flagCodes[lang]} alt={`${lang} flag`} className="dropdown-flag" />
                      <span className="language-name">{lang === 'en' ? 'EN' : lang === 'es' ? 'ES' : 'PT'}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </header>
        <div className="overlay">
          <div className="content">
            <h1 className="title">
              <Typewriter text={texts[language].comingSoon} speed={100} />
            </h1>
            <p className="subtitle">
              <Typewriter text={texts[language].subtitle} speed={50} />
            </p>
          </div>
          <div className='social-icons'>
            <a href="https://www.facebook.com/americantint.argentina/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/americantint.argentina/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@Americantint" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5491122496051&text=Buenas%F0%9F%91%8B%0AEstaba%20viendo%20su%20p%C3%A1gina%20web%2C%20y%20quer%C3%ADa%20consultar%20por..." target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      {/* Otras secciones */}
      <section id="section1" className="section">Terminar..</section>
    </div>
  );
}

export default App;