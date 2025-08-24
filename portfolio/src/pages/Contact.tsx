import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../assets/CSS/Contact.css";

export default function Contacts() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_xn66vzs",
          "template_c7g1hmr",
          form.current,
          "ml5mM8V7Cods9OdW0"
        )
        .then(
          () => {
            setStatus("Mensagem enviada com sucesso!");
            form.current?.reset();
          },
          (error: { text: string; }) => {
            setStatus("Erro ao enviar: " + error.text);
          }
        );
    }
  };

  return (
    <div className="contacts">
      <h1 className="contacts-title">Entre em Contato</h1>

      <div className="contact-card big two-columns">
        {/* Coluna Esquerda */}
        <div className="contact-left">
          <h2>Venha se conectar 💬</h2>
          <p>Estou sempre aberto a parcerias e oportunidades</p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/vitor-hd-marinho/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="social linkedin" />
            </a>
            <a
              href="https://github.com/VitorHDMarinho"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="social github" />
            </a>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="name" placeholder="Seu Nome" required />
            <input type="email" name="email" placeholder="Seu Email" required />
            <textarea
              name="message"
              rows={5}
              placeholder="Sua Mensagem"
              required
            />
            <button type="submit" className="contact-btn">
              Enviar
            </button>
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
      </div>
    </div>
  );
}
