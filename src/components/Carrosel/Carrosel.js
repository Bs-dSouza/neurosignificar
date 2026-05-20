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
              <div>
                <h2 className={styles.textoInicial}>
                  Cuidando com amor e ciência,<br></br> para o desenvolvimento
                  de cada criança.
                </h2>
                <p className={styles.paragrafro_Home}>
                  Nossa clínica multidisciplinar é especializada<br></br> no
                  atendimento a pessoas com Transtorno do<br></br> Espectro
                  Autista (TEA), oferecendo suporte<br></br> individualizado
                  para cada fase da vida.
                </p>
                <button
                  className={styles.btn_SaibaMais}
                  onClick={() => navigate("/about")}
                >
                  Saiba Mais
                </button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={`${styles.carousel_item} ${styles.slide2}`}>
            <Carousel.Caption>
              <div>
                <h2 className={styles.textoInicial}>
                  Especialistas em cada etapa<br /> do desenvolvimento
                </h2>
                <p className={styles.paragrafro_Home}>
                  Psicologia ABA, Fonoaudiologia e Psicopedagogia<br />
                  em um só lugar, com profissionais dedicados<br />
                  ao desenvolvimento do seu filho.
                </p>
                <button
                  className={styles.btn_SaibaMais}
                  onClick={() => navigate("/servico")}
                >
                  Nossos Serviços
                </button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={`${styles.carousel_item} ${styles.slide3}`}>
            <Carousel.Caption>
              <div>
                <h2 className={styles.textoInicial}>
                  Agende uma avaliação e<br /> dê o primeiro passo
                </h2>
                <p className={styles.paragrafro_Home}>
                  Atendemos de forma personalizada.<br />
                  Venha conhecer nossa clínica e conversar<br />
                  com nossa equipe especializada.
                </p>
                <button
                  className={styles.btn_SaibaMais}
                  onClick={() => navigate("/contato")}
                >
                  Entre em Contato
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
