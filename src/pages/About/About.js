import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import fachadaPrincipal from "../../Imagens/fachadaPrincipal.png";
import sala1 from "../../Imagens/sala1.jpeg";
import sala2 from "../../Imagens/sala2.jpeg";
import salaTO from "../../Imagens/salaTO.jpeg";
import ceo from "../../Imagens/ceo.png";
import clinica1 from "../../Imagens/clinica1.jpeg";
import clinica2 from "../../Imagens/clinica2.jpeg";
import clinica3 from "../../Imagens/clinica3.jpeg";

const galleryImages = [
  { src: sala1, alt: "Clínica 1" },
  { src: sala2, alt: "Clínica 2" },
  { src: salaTO, alt: "Clínica 3" },
  { src: clinica1, alt: "Clínica 4" },
  { src: clinica2, alt: "Clínica 5" },
  { src: clinica3, alt: "Clínica 6" },
];

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
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const dragStartX = useRef(null);
  const dragEndX = useRef(null);

  useScrollReveal('[data-reveal="fade-up"]', styles.revealFadeUp);
  useScrollReveal('[data-reveal="fade-left"]', styles.revealFadeLeft);
  useScrollReveal('[data-reveal="fade-right"]', styles.revealFadeRight);
  useScrollReveal('[data-reveal="zoom"]', styles.revealZoom);

  useEffect(() => {
    if (activeImageIndex === null) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeImageIndex]);

  const openViewer = (index) => {
    setActiveImageIndex(index);
  };

  const closeViewer = () => {
    setActiveImageIndex(null);
  };

  const goToPrevious = () => {
    setActiveImageIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveImageIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1));
  };

  const handlePointerDown = (event) => {
    dragStartX.current = event.clientX;
    dragEndX.current = event.clientX;
  };

  const handlePointerMove = (event) => {
    if (dragStartX.current !== null) {
      dragEndX.current = event.clientX;
    }
  };

  const handlePointerUp = () => {
    if (dragStartX.current === null || dragEndX.current === null) {
      return;
    }

    const difference = dragStartX.current - dragEndX.current;
    const threshold = 60;

    if (difference > threshold) {
      goToNext();
    } else if (difference < -threshold) {
      goToPrevious();
    }

    dragStartX.current = null;
    dragEndX.current = null;
  };

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
            psicólogos, fonoaudiólogos, terapeutas ocupacionais e diversos outros especialistas dedicados
            ao desenvolvimento de cada paciente.
          </p>
        </div>
        <div className={styles.heroImagem} data-reveal="fade-right">
          <img src={fachadaPrincipal} alt="Fachada da Clínica NeuroSignificar" />
        </div>
      </div>

      {/* CEO */}
      <section className={styles.ceoSecao}>
        <div className={styles.ceoConteudo} data-reveal="fade-left">
          <span className={styles.ceoTag}>Quem conduz nossa missão</span>
          <h2>Miriã Souza: liderança clínica com propósito e excelência</h2>
          <p>
            Miriã Souza é psicóloga, pós-graduada em Análise Comportamental Aplicada (ABA),
            e reúne mais de 8 anos de experiência dedicados ao desenvolvimento infantil e ao
            cuidado humanizado de crianças e famílias.
          </p>
          <p>
            À frente da NeuroSignificar, ela conduz uma clínica que une ciência, acolhimento e
            compromisso com resultados concretos, mantendo uma atuação sensível, ética e centrada
            no potencial de cada paciente.
          </p>
          <div className={styles.ceoDestaque}>
            <span className={styles.ceoAspas}>“</span>
            <p>
              Já são mais de 350 famílias atendidas com escuta, carinho e um trabalho fundamentado
              em técnica, respeito e evolução contínua.
            </p>
          </div>
        </div>
        <div className={styles.ceoImagemArea} data-reveal="fade-right">
          <div className={styles.ceoImagemWrap}>
            <img src={ceo} alt="CEO da Clínica NeuroSignificar" />
          </div>
          <div className={styles.ceoCard}>
            <h3>Miriã Souza</h3>
            <p>Psicóloga, pós-graduada em ABA, com mais de 8 anos de experiência e mais de 350 famílias atendidas.</p>
          </div>
        </div>
      </section>

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
          {galleryImages.map((image, index) => (
            <img
              key={image.alt}
              src={image.src}
              alt={image.alt}
              data-reveal="zoom"
              style={{ transitionDelay: `${index * 0.15}s` }}
              onClick={() => openViewer(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openViewer(index);
                }
              }}
            />
          ))}
        </div>

      </div>

      {activeImageIndex !== null && (
        <div className={styles.viewerOverlay} onClick={closeViewer}>
          <div className={styles.viewerPanel} onClick={(event) => event.stopPropagation()}>
            <button type="button" className={styles.viewerClose} onClick={closeViewer} aria-label="Fechar">
              ×
            </button>
            <button type="button" className={styles.viewerArrowLeft} onClick={goToPrevious} aria-label="Imagem anterior">
              ‹
            </button>
            <div
              className={styles.viewerImageWrap}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              <img
                src={galleryImages[activeImageIndex].src}
                alt={galleryImages[activeImageIndex].alt}
                className={styles.viewerImage}
                draggable="false"
              />
            </div>
            <button type="button" className={styles.viewerArrowRight} onClick={goToNext} aria-label="Próxima imagem">
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
