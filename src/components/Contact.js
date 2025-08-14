import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Contact.css';
import { db } from '../Backend/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, message } = form;
    const fullName = `${firstName} ${lastName}`.trim();

    const text = `${fullName}: ${message}`;

    const phoneNumber = '5561984728164';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');

    try {
      await addDoc(collection(db, "contatos"), {
        firstName,
        lastName,
        message,
        createdAt: Timestamp.now()
      });
      console.log("Mensagem salva com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar mensagem:", error);
    }
  };

  return (
    <section id="contato" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Entre em Contato Conosco</h2>
          <p>
            Estamos prontos para escutar seu caso e encontrar a melhor solução jurídica com dedicação e ética.
          </p>
          <ul>
            <li><FaEnvelope className="icon" /> patriciaoliveiraapolinarioadv@gmail.com</li>
            <li><FaPhoneAlt className="icon" /> (61) 984728164</li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="firstName"
            placeholder="Nome"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Sobrenome"
            value={form.lastName}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            rows="6"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
