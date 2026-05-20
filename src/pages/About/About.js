import React, { useEffect } from "react";
import styles from "./About.module.css";
import faixada from "../../Imagens/faixada.jpeg";
import sala1 from "../../Imagens/sala1.jpeg";
import sala2 from "../../Imagens/sala2.jpeg";
import salaTO from "../../Imagens/salaTO.jpeg";

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

const About = () => {
  useScrollReveal('[data-reveal="fade-up"]', styles.revealFadeUp);
  useScrollReveal('[data-reveal="fade-left"]', styles.revealFadeLeft);
  useScrollReveal('[data-reveal="fade-right"]', styles.revealFadeRight);
  useScrollReveal('[data-reveal="zoom"]', styles.revealZoom);

  return (
    <>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroTexto} data-reveal="fade-left">
          <span className={styles.tag}>Clínica NeuroSignificar</span>
          <h1>Conheça nossa história e o nosso propósito</h1>
          <p>
            Somos uma clínica multidisciplinar referência no atendimento
            comportamental integrado, fundamentado nos princípios da
            Análise do Comportamento Aplicada (ABA).
          </p>
          <p>
            Contamos com uma equipe altamente qualificada, composta por
            psicólogos, fonoaudiólogos, terapeutas ocupacionais,
            fisioterapeutas e diversos outros especialistas dedicados
            ao desenvolvimento de cada paciente.
          </p>
        </div>
        <div className={styles.heroImagem} data-reveal="fade-right">
          <img src={faixada} alt="Fachada da Clínica NeuroSignificar" />
        </div>
      </div>

      {/* Missão / Visão / Valores */}
      <div className={styles.valores}>
        <div className={styles.valorCard} data-reveal="fade-up">
          <span className={styles.valorIcone}>🌱</span>
          <h3>Missão</h3>
          <p>Promover o desenvolvimento e a qualidade de vida de cada pessoa atendida, com base científica e olhar humanizado.</p>
        </div>
        <div className={styles.valorCard} data-reveal="fade-up" style={{transitionDelay: "0.15s"}}>
          <span className={styles.valorIcone}>👁️</span>
          <h3>Visão</h3>
          <p>Ser referência nacional em atendimento multidisciplinar para TEA e outras condições do neurodesenvolvimento.</p>
        </div>
        <div className={styles.valorCard} data-reveal="fade-up" style={{transitionDelay: "0.3s"}}>
          <span className={styles.valorIcone}>❤️</span>
          <h3>Valores</h3>
          <p>Respeito, empatia, inovação e comprometimento com cada família que confia em nosso trabalho.</p>
        </div>
      </div>

      {/* Galeria */}
      <div className={styles.galeriaSecao}>
        <h2>Nossa Clínica</h2>
        <p className={styles.galeriaSubtitulo}>Um espaço pensado para acolher e transformar</p>
        <div className={styles.galeria}>
          <img src={sala1} alt="Clínica 1" data-reveal="zoom" />
          <img src={sala2} alt="Clínica 2" data-reveal="zoom" style={{transitionDelay: "0.15s"}} />
          <img src={salaTO} alt="Clínica 3" data-reveal="zoom" style={{transitionDelay: "0.3s"}} />
        </div>
      </div>
    </>
  );
};

export default About;
