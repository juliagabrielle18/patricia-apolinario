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
<a
  href="https://wa.me/5561994449656?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta."
  className="btn-primary"
  target="_blank"
  rel="noopener noreferrer"
>
  Agende sua consulta
</a>

      </div>
    </section>
  );
}

export default Hero;
