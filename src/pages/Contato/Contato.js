import React, { useEffect } from "react";
import styles from "./Contato.module.css";
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

function useScrollReveal(selector, animClass) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, animClass]);
}

const Contato = () => {
  useScrollReveal('[data-reveal="fade-up"]', styles.revealFadeUp);
  useScrollReveal('[data-reveal="fade-left"]', styles.revealFadeLeft);
  useScrollReveal('[data-reveal="fade-right"]', styles.revealFadeRight);

  return (
    <>
      {/* Hero */}
      <div className={styles.hero}>
        <span className={styles.tag}>Fale Conosco</span>
        <h1>Entre em contato com a nossa equipe</h1>
        <p>Estamos prontos para atender você e sua família. Agende uma consulta ou tire suas dúvidas.</p>
      </div>

      {/* Cards de contato */}
      <div className={styles.cardsContato}>
        <div className={styles.card} data-reveal="fade-up">
          <FaEnvelope className={styles.cardIcone} />
          <h3>E-mail</h3>
          <p>neurosignificar25@gmail.com</p>
        </div>
        <div className={styles.card} data-reveal="fade-up" style={{transitionDelay: "0.1s"}}>
          <FaWhatsapp className={styles.cardIcone} />
          <h3>WhatsApp</h3>
          <a
            href="https://wa.me/5511977729848?text=Gostaria%20de%20agendar%20uma%20consulta"
            target="_blank"
            rel="noopener noreferrer"
          >
            (11) 97772-9848
          </a>
        </div>
        <div className={styles.card} data-reveal="fade-up" style={{transitionDelay: "0.2s"}}>
          <FaMapMarkerAlt className={styles.cardIcone} />
          <h3>Endereço</h3>
          <p>Rua Padre Aquiles, 113<br />Jardim Santo Antônio, Caieiras - SP<br />CEP 07700-000</p>
        </div>
        <div className={styles.card} data-reveal="fade-up" style={{transitionDelay: "0.3s"}}>
          <FaClock className={styles.cardIcone} />
          <h3>Horário</h3>
          <p>Segunda a Sexta<br />8h às 18h<br /></p>
        </div>
      </div>

      {/* Mapa + Redes Sociais */}
      <div className={styles.mapaSecao}>
        <div className={styles.mapaWrapper} data-reveal="fade-left">
          <iframe
            title="Localização NeuroSignificar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.678727120024!2d-46.74964902467573!3d-23.363651278936143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee482110c9ef7%3A0x1563e4802d0cce48!2sR.%20Padre%20Aquiles%20Silvestre%2C%20113%20-%20Jardim%20Santo%20Antonio%2C%20Caieiras%20-%20SP%2C%2007700-000!5e0!3m2!1spt-BR!2sbr!4v1773939761231!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.redesSociais} data-reveal="fade-right">
          <h2>Nossa Rede Social</h2>
          <p>Acompanhe nossas novidades e conteúdos nas redes:</p>
          <div className={styles.redesBotoes}>
            <a
              href="https://www.instagram.com/neurosignificar_nucleo/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnInstagram}
            >
              <FaInstagram /> Instagram da Clínica
            </a>
            <a
              href="https://www.tiktok.com/@psicologainfantil.miria"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnTiktok}
            >
              <FaTiktok /> TikTok
            </a>
            <a
              href="https://www.instagram.com/miriasouza.psicologa/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnInstagram}
            >
              <FaInstagram /> Instagram — Psi. Miriã Souza
            </a>
          </div>
          <div className={styles.infoExtra}>
            <p>📍 <strong>Rua Padre Aquiles, 113</strong><br />Jardim Santo Antônio, Caieiras - SP</p>
            <p>📞 <strong>(11) 97772-9848</strong></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contato;
