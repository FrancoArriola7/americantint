import React from 'react';
import './App.css'; // Asegúrate de personalizar los estilos en tu archivo CSS
import placeholderImage from './assets/construction-set-icons_24877-60028.avif'; // Reemplaza con la ruta correcta de la imagen

function App() {
  return (
    <div className="construction-page">
      <div className="left-section">
        <h1>¡Nuestra nueva página web está en camino!</h1>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <div className="contact-info">
          <p>Contacto — Teléfono: +54 11 4382-4670</p>
          <p>Email: info@americantint.com.ar</p>
        </div>
      </div>
      <div className="right-section">
        <img src={placeholderImage} alt="Placeholder" />
      </div>
      <footer>
        <p>© 2024 por AmericanTint. Orgullosamente creado para la empresa.</p>
      </footer>
    </div>
  );
}

export default App;
