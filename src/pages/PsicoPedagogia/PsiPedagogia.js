import React from 'react';
import styles from './PsiPedagogia.module.css';
import img1 from './IMG/pedagoga1.jpg';
import img2 from './IMG/psicopedagoga.png';
import { Link } from 'react-router-dom';

const PsiPedagogia = () => {
  return (
    <div className={styles.pagina}>

      {/* Hero */}
      <div className={styles.hero}>
        <span className={styles.tag}>Especialidade</span>
        <h1>Psicopedagogia</h1>
        <p>Apoio especializado para o aprendizado e o desenvolvimento integral da criança</p>
      </div>

      {/* Bloco 1 — Texto esquerda, Imagem direita */}
      <section className={styles.bloco}>
        <div className={styles.textoBloco}>
          <h2>O que é a Psicopedagogia?</h2>
          <p>
            A Psicopedagogia é uma área que estuda como as pessoas aprendem e quais fatores podem
            dificultar esse processo. O psicopedagogo investiga as causas das dificuldades de
            aprendizagem e atua para superá-las de forma individualizada.
          </p>
          <p>
            Ela considera aspectos cognitivos, emocionais, sociais e familiares que influenciam
            diretamente no desempenho escolar e no desenvolvimento da criança, promovendo
            intervenções que respeitem o ritmo e as particularidades de cada um.
          </p>
          <p>
            O atendimento psicopedagógico pode ser indicado para crianças com dificuldades de
            leitura, escrita, cálculo, atenção, memória, organização, bem como para aquelas com
            diagnóstico de dislexia, TDAH, discalculia e outras condições que impactam a
            aprendizagem.
          </p>
          <p>
            <strong>Um exemplo prático:</strong> uma criança que troca letras ao escrever pode ser
            acompanhada pelo psicopedagogo, que identifica a origem da dificuldade e aplica
            atividades lúdicas e específicas para ajudá-la a superar esse desafio com segurança e
            autoconfiança.
          </p>
        </div>
        <div className={styles.imagemBloco}>
          <img src={img1} alt="Psicopedagogia" />
        </div>
      </section>

      {/* Bloco 2 — Imagem esquerda, Texto direita */}
      <section className={`${styles.bloco} ${styles.blocoInvertido}`}>
        <div className={styles.imagemBloco}>
          <img src={img2} alt="Atendimento Psicopedagógico" />
        </div>
        <div className={styles.textoBloco}>
          <h2>O que é trabalhado no atendimento?</h2>
          <p>No atendimento psicopedagógico, diversas habilidades e aspectos do aprendizado são
            trabalhados de forma personalizada, utilizando atividades práticas e dinâmicas
            adaptadas à realidade de cada criança:</p>
          <ul className={styles.lista}>
            <li>
              <strong>Leitura e escrita:</strong> identificar e superar dificuldades com letras,
              sílabas, palavras e textos.{' '}
              <em>Exemplo: trabalhar a reversão de letras como "b" e "d".</em>
            </li>
            <li>
              <strong>Raciocínio lógico e matemático:</strong> desenvolver a compreensão de
              números, operações e resolução de problemas.{' '}
              <em>Exemplo: usar jogos para facilitar o aprendizado da tabuada.</em>
            </li>
            <li>
              <strong>Atenção e concentração:</strong> fortalecer a capacidade de manter o foco
              nas tarefas escolares e cotidianas.{' '}
              <em>Exemplo: atividades de tempo progressivo para treinar a concentração.</em>
            </li>
            <li>
              <strong>Memória e organização:</strong> estimular estratégias para reter informações
              e organizar rotinas de estudo.{' '}
              <em>Exemplo: criar mapas mentais e listas de tarefas.</em>
            </li>
            <li>
              <strong>Autoestima e motivação:</strong> resgatar a confiança da criança em sua
              capacidade de aprender.{' '}
              <em>Exemplo: valorizar conquistas pequenas para construir autoconfiança.</em>
            </li>
            <li>
              <strong>Orientação familiar e escolar:</strong> orientar pais e professores sobre
              estratégias de apoio ao aprendizado.{' '}
              <em>Exemplo: sugerir adaptações nas tarefas de casa e na rotina escolar.</em>
            </li>
          </ul>
          <p className={styles.destaque}>
            O atendimento psicopedagógico é realizado de forma lúdica e acolhedora, respeitando o
            tempo de cada criança. O objetivo é transformar a relação dela com o aprendizado,
            tornando o estudo algo prazeroso e significativo.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className={styles.cta}>
        <h2>Quer saber mais ou agendar uma avaliação?</h2>
        <p>Entre em contato com nossa equipe. Estamos prontos para ajudar.</p>
        <Link to="/contato" className={styles.btnContato}>Entre em Contato</Link>
      </div>

    </div>
  );
};

export default PsiPedagogia;
