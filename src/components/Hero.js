import React from 'react';
import './Hero.css';
import direitoImg from '../assets/direito.jpg';

function Hero() {
  return (
    <section
      className="hero-root"
      id="inicio"
      style={{ backgroundImage: `url(${direitoImg})` }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Patrícia Apolinário</h1>
        <p className="subtitle">Advocacia & Assessoria</p>
        <p className="description">
          Compromisso, ética e excelência no Direito Previdenciário, Imobiliário,
          Família, Sucessões e Agrário.
        </p>
        <a href="#contato" className="btn-primary">
          Agende sua consulta
        </a>
      </div>
    </section>
  );
}

export default Hero;
