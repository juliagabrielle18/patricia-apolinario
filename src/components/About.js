import React from 'react';
import './About.css';
import aboutImage from '../assets/about-lawyer.jpg'; // Ajuste o caminho e nome da imagem conforme seu projeto

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>Sobre Nós</h2>
          <p>
            Na <strong>Patrícia Apolinário Advocacia & Assessoria</strong>, transformamos o conceito de advocacia com uma abordagem inovadora e centrada no cliente.
          </p>
          <p>
            Atuamos com excelência e pioneirismo nas áreas previdenciária, imobiliária, família, sucessões e direito agrário, oferecendo soluções jurídicas estratégicas que garantem segurança e resultados efetivos.
          </p>
          <p>
            Nossa equipe combina profundo conhecimento técnico com um atendimento humanizado e personalizado — porque para nós, cada cliente é único e merece a melhor defesa e orientação.
          </p>
          <p>
            Conquiste tranquilidade e confiança com quem entende o futuro do direito e do seu negócio.
          </p>
        </div>
        <div className="about-image-wrapper">
          <img src={aboutImage} alt="Advogada Patrícia Apolinário" />
        </div>
      </div>

      {/* Wave SVG */}
      <div className="about-wave">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#d9caa4" 
            d="M0,96L60,90.7C120,85,240,75,360,74.7C480,75,600,85,720,106.7C840,128,960,160,1080,165.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}

export default About;
