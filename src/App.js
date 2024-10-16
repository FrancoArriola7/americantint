import React, { useState, useEffect } from 'react';
import './App.css';
import {FaFacebookF, FaInstagram, FaYoutube} from 'react-icons/fa';

const images = [
  require('./assets/marmoleado.png'), // Ruta de la primera imagen
  require('./assets/colorido.png'), // Ruta de la segunda imagen
  require('./assets/fondo3.png')
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 6000); // Cambia la imagen cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background" style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <header className="header">
        <div className="logo">American Tint</div>
        <button className="header-button">Contact Us</button>
      </header>
      <div className="overlay">
        <div className="content">
          <h1 className="title">
            <Typewriter text="Coming Soon" speed={100}/>
          </h1>
          <p className="subtitle">
            <Typewriter text="Our website is under construction. Stay tuned for updates!" speed={50} />
          </p>
        </div>
        <div className='social-icons'>
        <a href="https://www.facebook.com/americantint.argentina/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/americantint.argentina/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@Americantint" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>

        </div>
      </div>
    </div>
  );
}

export default App;
