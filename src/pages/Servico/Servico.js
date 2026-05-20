import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Servico.module.css";
import psico from "../../Imagens/psico.jpg";
import fono from "../../Imagens/fono.jpg";
import psicopedagoga from "../../Imagens/psicopedagoga.png";

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

const Serviço = () => {
  useScrollReveal('[data-reveal="fade-up"]', styles.revealFadeUp);
  useScrollReveal('[data-reveal="fade-left"]', styles.revealFadeLeft);
  useScrollReveal('[data-reveal="fade-right"]', styles.revealFadeRight);

  return (
    <>
      <div className={styles.container}>
        <h1 data-reveal="fade-up">Nossas Especialidades</h1>
        <p className={styles.subtitulo} data-reveal="fade-up" style={{transitionDelay: "0.1s"}}>Atendimento multidisciplinar com foco no desenvolvimento e bem-estar</p>

        {/* Sessão 1 — imagem esquerda, texto direita */}
        <div className={`${styles.sessao} ${styles.sessao1}`}>
          <div className={styles.imgWrapper} data-reveal="fade-left">
            <img src={psico} alt="Psicologia ABA" />
          </div>
          <div className={styles.texto} data-reveal="fade-right">
            <span className={styles.badge}>01</span>
            <h2>Psicologia ABA</h2>
            <p>A Análise do Comportamento Aplicada (ABA) é uma ciência focada no desenvolvimento de habilidades sociais, comunicativas e comportamentais em pessoas com TEA.</p>
            <Link to="/psicologia" className={styles.btnSaibaMais}>Saiba Mais</Link>
          </div>
        </div>

        {/* Sessão 2 — texto esquerda, imagem direita */}
        <div className={`${styles.sessao} ${styles.sessao2} ${styles.invertido}`}>
      
          <div className={styles.imgWrapper} data-reveal="fade-right">
            <img src={fono} alt="Fonoaudiologia" />
          </div>
          <div className={styles.texto} data-reveal="fade-left">
            <span className={styles.badge}>02</span>
            <h2>Fonoaudiologia</h2>
            <p>Atendimento especializado para o desenvolvimento da comunicação, linguagem oral e escrita, garantindo evolução contínua e personalizada para cada paciente.</p>
            <Link to="/fonoaudiologia" className={styles.btnSaibaMais}>Saiba Mais</Link>
          </div>
        </div>

        {/* Sessão 3 — imagem esquerda, texto direita */}
        <div className={`${styles.sessao} ${styles.sessao3}`}>
          <div className={styles.imgWrapper} data-reveal="fade-left">
            <img src={psicopedagoga} alt="Psicopedagogia" />
          </div>
          <div className={styles.texto} data-reveal="fade-right">
            <span className={styles.badge}>03</span>
            <h2>Psicopedagogia</h2>
            <p>A psicopedagogia auxilia no diagnóstico e intervenção de dificuldades de aprendizagem, promovendo autonomia e confiança no processo educacional da criança.</p>
            <Link to="/psicopedagogia" className={styles.btnSaibaMais}>Saiba Mais</Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default Serviço;
