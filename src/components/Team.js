import React from 'react';
import './Team.css';

function Team() {
  return (
    <section id="team" className="team-split">
      <div className="team-container">
        <div className="team-image">
        </div>
        <div className="team-content">
          <h2>Patrícia Apolinário</h2>
          <h3>Fundadora & Advogada Principal</h3>
          <blockquote>
            “Transformando desafios jurídicos em soluções concretas, com ética, paixão e dedicação.”
          </blockquote>
          <p>
          Nosso compromisso:
          </p>
          <ul>
            <li><strong>Atendimento humanizado</strong> valorizando sua história e necessidades.</li>
            <li><strong>Ética irrestrita</strong> com transparência e honestidade.</li>
            <li><strong>Foco em resultados ágeis</strong> e alinhados aos seus objetivos.</li>
          </ul>
          <p>
          Conte com uma equipe que respeita você e luta pelo seu direito com excelência.
          </p>

          <button
  onClick={() =>
    window.open(
      "https://wa.me/61984728164?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.",
      "_blank"
    )
  }
>
  Agende sua Consulta
</button>

        </div>
      </div>
    </section>
  );
}

export default Team;
