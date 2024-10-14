import React from 'react';
import './App.css'; // Asegúrate de personalizar los estilos en tu archivo CSS
import placeholderImage from './assets/construction-set-icons_24877-60028.avif'; // Reemplaza con la ruta correcta de la imagen
import QRCode from 'react-qr-code'; // Importa el componente QRCode

function App() {
  const links = [
    'https://americantint.net/ficha-tecnica/100',
    'https://americantint.net/ficha-tecnica/200',
    'https://americantint.net/ficha-tecnica/300',
    'https://americantint.net/ficha-tecnica/400',
    'https://americantint.net/ficha-tecnica/500',
    'https://americantint.net/ficha-tecnica/wf',
  ];

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

      {/* Códigos QR debajo del footer */}
      <div className="qr-codes-section">
        <h2>Códigos QR</h2>
        <div className="qr-codes-container">
          {links.map((link, index) => (
            <div key={index} className="qr-code-card">
              <div className="qr-code-card-content">
                <QRCode value={link} size={150} />
                <p>{link}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
