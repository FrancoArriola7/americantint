import React from 'react';
import '../App.css';

function AboutUs({ language }) {
  return (
    <div className="about-us-section">
      <div className="about-content">
        <div className="about-text">
          <h2>{language === 'en' ? 'About American Tint' : language === 'es' ? 'Sobre American Tint' : 'Sobre American Tint'}</h2>
          <p>
            {language === 'en' 
              ? 'Welcome to AmericanTint! We are a leading distributor of polarized and safety films, vinyls for the graphic industry, sealants, and Smart film. With solid partnerships with international brands like Avery Dennison, Sika, and Luxury Films, we pride ourselves on providing quality solutions.' 
              : language === 'es' 
              ? '¡Bienvenidos a AmericanTint! Empresa distribuidora líder en comercialización de láminas polarizadas y de seguridad, vinilos para la industria gráfica, selladores y Smart film. Con una sólida asociación con primeras marcas a nivel internacional como Avery Dennison, Sika y Luxury Films. Nos enorgullecemos de proporcionar soluciones de calidad.' 
              : 'Bem-vindo à AmericanTint! Empresa líder na distribuição de películas polarizadas e de segurança, vinis para a indústria gráfica, selantes e Smart film. Com uma parceria sólida com marcas internacionais como Avery Dennison, Sika e Luxury Films, nos orgulhamos de fornecer soluções de qualidade.'
            }
          </p>
        </div>
        <div className="about-image">
          <img src={require('../assets/marmoleado.png')} alt="American Tint" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
