import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Contact.css';
import { db } from '../Backend/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = form;

    const text = `Olá, meu nome é *${name}*.\nMeu e-mail é: ${email}.\n\nMensagem:\n${message}`;
    const phoneNumber = '5561994449656';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    // Abre o WhatsApp primeiro para evitar bloqueio de popup
    window.open(url, '_blank');

    try {
      await addDoc(collection(db, "contatos"), {
        name,
        email,
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
            <li><FaPhoneAlt className="icon" /> (61) 994449656</li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={form.email}
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
