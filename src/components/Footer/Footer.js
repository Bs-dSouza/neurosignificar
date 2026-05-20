import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Imagens/logoFooterMenor.png";

const instagram = "https://www.instagram.com/neurosignificar_nucleo/";
const facebook = "https://www.facebook.com/neurosignificar";
const whatsapp = "https://wa.me/5511977729848";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>

        {/* Coluna 1: Logo + descrição + redes */}
        <div className={styles.colLogo}>
          <img src={logo} alt="NeuroSignificar" className={styles.logoFooter} />
          <p className={styles.descricao}>
            Cuidando do desenvolvimento e do bem-estar com ciência, afeto e
            dedicação.
          </p>
          <div className={styles.sociais}>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              title="Instagram"
            >
              <FaInstagram />
            </a>
            
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialBtn} ${styles.socialWa}`}
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Coluna 2: Links rápidos */}
        <div className={styles.colLinks}>
          <h4 className={styles.colTitulo}>Links Rápidos</h4>
          <ul className={styles.linksList}>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/about">Sobre Nós</Link></li>
            <li><Link to="/servico">Serviços</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Serviços */}
        <div className={styles.colLinks}>
          <h4 className={styles.colTitulo}>Nossos Serviços</h4>
          <ul className={styles.linksList}>
            <li><Link to="/servico">Psicologia ABA</Link></li>
            <li><Link to="/servico">Fonoaudiologia</Link></li>
            <li><Link to="/servico">Psicopedagogia</Link></li>
            <li><Link to="/servico">Avaliação Neuropsicológica</Link></li>
            <li><Link to="/servico">Terapia Ocupacional</Link></li>
          </ul>
        </div>

        {/* Coluna 4: Contato */}
        <div className={styles.colContato}>
          <h4 className={styles.colTitulo}>Fale Conosco</h4>
          <ul className={styles.contatoList}>
            <li>
              <FaMapMarkerAlt className={styles.contatoIcone} />
              <span>
                Rua Padre Aquiles Silvestre, 113<br />
                Jardim Santo Antônio, Caieiras – SP
              </span>
            </li>
            <li>
              <FaPhone className={styles.contatoIcone} />
              <a href="tel:+5511977729848">(11) 97772-9848</a>
            </li>
            <li>
              <FaEnvelope className={styles.contatoIcone} />
              <a href="mailto:neurosignificar25@gmail.com">
                neurosignificar25@gmail.com
              </a>
            </li>
            <li>
              <FaClock className={styles.contatoIcone} />
              <span>
                Seg – Sex: 8h às 18h<br />
                Sábado: 8h às 12h
              </span>
            </li>
          </ul>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} NeuroSignificar — Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
