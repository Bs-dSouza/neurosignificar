import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Carrosel.module.css";
import { useNavigate } from "react-router-dom";

const Carrosel = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={styles.carroselCustom}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className={`${styles.carousel_item} ${styles.slide1}`}>
            <Carousel.Caption>
              <div className={styles.captionContent}>
                <span className={styles.tagline}>Clínica Multidisciplinar</span>
                <h2 className={styles.textoInicial}>
                  Cuidado especializado para o desenvolvimento pleno de cada criança
                </h2>
                <p className={styles.paragrafro_Home}>
                  Somos uma clínica dedicada ao atendimento de crianças com Transtorno do Espectro Autista (TEA), com abordagem humanizada e baseada em evidências científicas.
                </p>
                <button
                  className={styles.btn_SaibaMais}
                  onClick={() => navigate("/about")}
                >
                  Conheça a Clínica
                </button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={`${styles.carousel_item} ${styles.slide2}`}>
            <Carousel.Caption>
              <div className={styles.captionContent}>
                <span className={styles.tagline}>Nossa Equipe</span>
                <h2 className={styles.textoInicial}>
                  Uma equipe completa para cada etapa do desenvolvimento
                </h2>
                <p className={styles.paragrafro_Home}>
                  Psicologia ABA, Fonoaudiologia e Psicopedagogia integradas em um único espaço, com profissionais comprometidos com o progresso de cada criança.
                </p>
                <button
                  className={styles.btn_SaibaMais}
                  onClick={() => navigate("/servico")}
                >
                  Ver Serviços
                </button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={`${styles.carousel_item} ${styles.slide3}`}>
            <Carousel.Caption>
              <div className={styles.captionContent}>
                <span className={styles.tagline}>Agende sua Consulta</span>
                <h2 className={styles.textoInicial}>
                  Dê o primeiro passo rumo ao desenvolvimento
                </h2>
                <p className={styles.paragrafro_Home}>
                  Nossa equipe está pronta para acolher você e sua família com atenção e dedicação. Venha nos conhecer e inicie essa jornada conosco.
                </p>
                <button
                  className={styles.btn_SaibaMais}
                  onClick={() => navigate("/contato")}
                >
                  Fale Conosco
                </button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrosel;
