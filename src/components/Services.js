import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Direito Previdenciário',
    description:
      'Assessoria completa em benefícios previdenciários, aposentadorias, pensões e revisões.',
  },
  {
    title: 'Direito Imobiliário',
    description:
      'Consultoria em compra, venda, locação, contratos e regularização de imóveis.',
  },
  {
    title: 'Direito de Família',
    description:
      'Atuação em divórcios, guarda, pensão alimentícia, partilha de bens e mais.',
  },
  {
    title: 'Sucessões',
    description:
      'Planejamento sucessório, testamentos, inventários e partilha de bens.',
  },
  {
    title: 'Direito Agrário',
    description:
      'Consultoria e defesa para questões fundiárias, contratos rurais e regularização.',
  },
];

export default function Services() {
  return (
    <section className="services" id="servicos">
      <h2 className="services-title">Áreas de Atuação</h2>

      <div className="services-row">
        {servicesData.slice(0, 3).map(({ title, description }, idx) => (
          <article key={idx} className="service-card" tabIndex={0}>
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-desc">{description}</p>
          </article>
        ))}
      </div>

      <div className="services-row services-row-center">
        {servicesData.slice(3).map(({ title, description }, idx) => (
          <article key={idx + 3} className="service-card" tabIndex={0}>
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-desc">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
