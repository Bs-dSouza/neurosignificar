import React, { useEffect } from "react";
import styles from "./Servico.module.css";
import psico from "../../Imagens/psico.jpg";
import fono from "../../Imagens/fono.jpg";
import psicopedagoga from "../../Imagens/psicopedagoga.png";
import terapiaOcupacional from "../../Imagens/to1.png";
import avaliacaoNeuropsicologica from "../../Imagens/avaliacaoneuro.png";

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
            <p>Um acompanhamento individualizado para desenvolver habilidades, favorecer a autonomia e ampliar a qualidade de vida. A partir dos princípios da ABA, trabalhamos aspectos comportamentais, emocionais, sociais e de comunicação, sempre considerando a realidade de cada criança e sua família.</p>
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
            <p>Cuidamos do desenvolvimento da comunicação e da linguagem de forma individualizada e integrada. O acompanhamento pode envolver fala, compreensão, expressão, comunicação funcional, interação e aspectos relacionados às funções orofaciais e à alimentação.
</p>
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
            <p>Acompanhamos o processo de aprendizagem de forma individualizada, buscando compreender as dificuldades e potencialidades de cada criança. O trabalho favorece o desenvolvimento de habilidades acadêmicas, cognitivas e estratégias que tornam a aprendizagem mais significativa e funcional.</p>
          </div>
        </div>

        <div className={`${styles.sessao} ${styles.sessao4} ${styles.invertido}`}>
          <div className={styles.imgWrapper} data-reveal="fade-right">
            <img src={terapiaOcupacional} alt="Terapia ocupacional" />
          </div>
          <div className={styles.texto} data-reveal="fade-left">
            <span className={styles.badge}>04</span>
            <h2>Terapia Ocupacional</h2>
            <p>Promovemos maior autonomia e participação da criança nas atividades do dia a dia. O trabalho envolve habilidades motoras, sensoriais, cognitivas e funcionais, buscando favorecer o desempenho em casa, na escola e em outros ambientes importantes para seu desenvolvimento.</p>
          </div>
        </div>

        <div className={`${styles.sessao} ${styles.sessao5}`}>
          <div className={styles.imgWrapper} data-reveal="fade-left">
            <img src={avaliacaoNeuropsicologica} alt="Avaliação neuropsicológica" />
          </div>
          <div className={styles.texto} data-reveal="fade-right">
            <span className={styles.badge}>05</span>
            <h2>Avaliação Neuropsicológica</h2>
            <p>Uma avaliação completa para compreender como a criança ou adolescente aprende, pensa, se comporta e se relaciona. Investigamos diferentes funções cognitivas e aspectos emocionais e comportamentais, identificando potencialidades e dificuldades para direcionar intervenções mais assertivas.</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Serviço;
