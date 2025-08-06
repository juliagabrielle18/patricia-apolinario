import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        {/* Texto ao lado */}
        <div className="contact-info">
          <h2>Entre em Contato Conosco</h2>
          <p>
            Estamos prontos para escutar seu caso e encontrar a melhor solução jurídica com dedicação e ética.
          </p>
          <ul>
            <li><FaEnvelope className="icon" /> patriciaoliveiraapolinarioadv@gmail.com</li>
            <li><FaPhoneAlt className="icon" /> (61) 98472-8164</li>

          </ul>
        </div>

        {/* Formulário em card */}
        <form className="contact-form" noValidate>
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu e-mail" required />
          <textarea name="message" placeholder="Sua mensagem" rows="6" required></textarea>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
