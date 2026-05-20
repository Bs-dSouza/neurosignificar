import React, { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import Carrosel from "../../components/Carrosel/Carrosel";
import { Link } from "react-router-dom";
import { FaBrain, FaComments, FaBook, FaWhatsapp } from "react-icons/fa";
import fotoClinica from "../../Imagens/fotoClinica.jpeg";

// Hook de scroll reveal
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

const Home = () => {
  // cada seletor recebe sua animação
  useScrollReveal(`[data-reveal="fade-up"]`, styles.revealFadeUp);
  useScrollReveal(`[data-reveal="fade-left"]`, styles.revealFadeLeft);
  useScrollReveal(`[data-reveal="fade-right"]`, styles.revealFadeRight);
  useScrollReveal(`[data-reveal="zoom"]`, styles.revealZoom);

  return (
    <div className={styles.conteudo}>

      {/* Carrossel */}
      <Carrosel />

      {/* Quem Somos resumido */}
      {/* <section className={styles.quemSomos}>
        <div className={styles.quemSomosTexto}>
          <span className={styles.tag}>Clínica NeuroSignificar</span>
          <h2>Cuidado especializado para cada fase do desenvolvimento</h2>
          <p>
            Somos uma clínica multidisciplinar especializada no atendimento a pessoas
            com Transtorno do Espectro Autista (TEA) e outras condições do
            neurodesenvolvimento. Nossa equipe é formada por profissionais altamente
            qualificados, comprometidos com o progresso e bem-estar de cada paciente.
          </p>
          <Link to="/about" className={styles.btnSaibaMais}>Conheça nossa história</Link>
        </div>
        <div className={styles.quemSomosImagem}>
          <img src={fotoClinica} alt="Clínica NeuroSignificar" />
        </div>
      </section> */}

      {/* Diferenciais */}
      <section className={styles.diferenciais}>
        <div className={styles.diferencial} data-reveal="fade-up">
          <span className={styles.diferencialNum}>+8</span>
          <p>Anos de experiência</p>
        </div>
        <div className={styles.diferencial} data-reveal="fade-up" style={{transitionDelay: "0.1s"}}>
          <span className={styles.diferencialNum}>+350</span>
          <p>Famílias atendidas</p>
        </div>
        <div className={styles.diferencial} data-reveal="fade-up" style={{transitionDelay: "0.2s"}}>
          <span className={styles.diferencialNum}>5</span>
          <p>Especialidades</p>
        </div>
        <div className={styles.diferencial} data-reveal="fade-up" style={{transitionDelay: "0.3s"}}>
          <span className={styles.diferencialNum}>100%</span>
          <p>Foco no paciente</p>
        </div>
      </section>

      {/* Especialidades */}
      <section className={styles.especialidades}>
        <span className={styles.tag}>O que oferecemos</span>
        <h2>Nossas Especialidades</h2>
        <p className={styles.especialidadesSubtitulo}>Atendimento integrado para o desenvolvimento pleno</p>
        <div className={styles.cardsEspecialidades}>
          <div className={styles.cardEsp} data-reveal="fade-left">
            <FaBrain className={styles.cardEspIcone} />
            <h3>Psicologia ABA</h3>
            <p>Análise do Comportamento Aplicada para desenvolvimento de habilidades sociais e comportamentais.</p>
          </div>
          <div className={styles.cardEsp} data-reveal="fade-up" style={{transitionDelay: "0.1s"}}>
            <FaComments className={styles.cardEspIcone} />
            <h3>Fonoaudiologia</h3>
            <p>Atendimento especializado para comunicação, linguagem oral e escrita.</p>
          </div>
          <div className={styles.cardEsp} data-reveal="fade-right">
            <FaBook className={styles.cardEspIcone} />
            <h3>Psicopedagogia</h3>
            <p>Diagnóstico e intervenção em dificuldades de aprendizagem com foco na autonomia.</p>
          </div>
          <div className={styles.cardEsp} data-reveal="fade-left" style={{transitionDelay: "0.15s"}}>
            <FaBrain className={styles.cardEspIcone} />
            <h3>Avaliação Neuropsicológica</h3>
            <p>Avaliação completa das funções cognitivas — atenção, memória, linguagem e raciocínio — para identificar perfis de neurodesenvolvimento e orientar o tratamento.</p>
          </div>
          <div className={styles.cardEsp} data-reveal="fade-right" style={{transitionDelay: "0.15s"}}>
            <FaBook className={styles.cardEspIcone} />
            <h3>Terapia Ocupacional</h3>
            <p>Intervenção para promover a independência e habilidades funcionais no dia a dia.</p>
          </div>
        </div>
        <Link to="/servico" className={styles.btnVerTodas}>Ver todas as especialidades</Link>
      </section>

      {/* Como funciona */}
      <section className={styles.comoFunciona}>
        <span className={styles.tagClaro}>Simples e rápido</span>
        <h2>Como começar o atendimento</h2>
        <div className={styles.passos}>
          <div className={styles.passo} data-reveal="fade-left">
            <span className={styles.passoBadge}>01</span>
            <h3>Entre em contato</h3>
            <p>Fale conosco pelo WhatsApp ou telefone e tire suas dúvidas.</p>
          </div>
          <div className={styles.passoSeta} data-reveal="fade-up" style={{transitionDelay: "0.15s"}}>&rarr;</div>
          <div className={styles.passo} data-reveal="fade-up" style={{transitionDelay: "0.2s"}}>
            <span className={styles.passoBadge}>02</span>
            <h3>Agende a anamnese</h3>
            <p>Marcamos uma anamnese inicial para entender as necessidades do paciente.</p>
          </div>
          <div className={styles.passoSeta} data-reveal="fade-up" style={{transitionDelay: "0.3s"}}>&rarr;</div>
          <div className={styles.passo} data-reveal="fade-right">
            <span className={styles.passoBadge}>03</span>
            <h3>Inicie o tratamento</h3>
            <p>Nossa equipe elabora um plano personalizado e o atendimento começa.</p>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className={`${styles.cta}`} data-reveal="zoom">
        <h2>Pronto para dar o primeiro passo?</h2>
        <p>Agende uma consulta hoje e inicie o desenvolvimento do seu filho com quem entende.</p>
        <a
          href="https://wa.me/5511977729848?text=Gostaria%20de%20agendar%20uma%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnWhatsapp}
        >
          <FaWhatsapp /> Falar pelo WhatsApp
        </a>
      </section>

    </div>
  );
};

export default Home;
