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
            Na <strong>Patrícia Apolinário Advocacia & Assessoria</strong>, oferecemos atendimento moderno, personalizado e focado nas necessidades de cada cliente.
          </p>
          <p>
           Atuamos em diversas áreas do Direito, garantindo soluções eficazes, segurança jurídica e proteção dos direitos.
          </p>
          <p>
           Nossa equipe combina conhecimento técnico e atendimento humanizado para uma defesa alinhada à sua realidade. Conte conosco para proteger você e seu negócio com confiança e excelência.
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
