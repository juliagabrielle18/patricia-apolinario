import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="logo" tabIndex={0}>
          Patrícia Apolinário Advocacia & Assessoria
        </p>
        <p className="rights" tabIndex={0}>
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
