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
            “Transformando desafios jurídicos em soluções reais, com ética, paixão e dedicação.”
          </blockquote>
          <p>
           Acreditamos em uma advocacia feita com escuta, cuidado e presença. Cada cliente é único — e cada causa, tratada com a atenção que merece.
          </p>
          <ul>
            <li><strong>Atendimento humanizado:</strong> Você é mais que um processo.</li>
            <li><strong>Ética irrestrita:</strong> Transparência e honestidade em todas as etapas.</li>
            <li><strong>Foco em resultados:</strong> Soluções rápidas e eficazes para seu caso.</li>
          </ul>
          <button onClick={() => alert('Agende sua consulta!')}>Agende sua Consulta</button>
        </div>
      </div>
    </section>
  );
}

export default Team;
