import React from 'react';
import styles from './Fono.module.css';
import fono1 from './IMG/fono1.jpg';
import fono2 from './IMG/fono2.jpg';
import { Link } from 'react-router-dom';

const Fono = () => {
  return (
    <div className={styles.pagina}>

      {/* Hero */}
      <div className={styles.hero}>
        <span className={styles.tag}>Especialidade</span>
        <h1>Fonoaudiologia</h1>
        <p>Desenvolvimento da comunicação e interação para crianças com TEA</p>
      </div>

      {/* Bloco 1 — Texto esquerda, Imagem direita */}
      <section className={styles.bloco}>
        <div className={styles.textoBloco}>
          <h2>Como funciona a Fonoaudiologia para TEA?</h2>
          <p>
            Na fonoaudiologia voltada para crianças com TEA (Transtorno do Espectro Autista),
            o foco principal é desenvolver a comunicação e a interação da criança, sempre
            respeitando seu tempo e suas necessidades.
          </p>
          <p>
            O atendimento é conduzido de forma <strong>lúdica</strong>, com brincadeiras e
            atividades que motivam a criança a participar. O objetivo é ajudá-la a se comunicar
            melhor, facilitando sua interação com o mundo e trazendo mais qualidade de vida para
            ela e sua família.
          </p>
        </div>
        <div className={styles.imagemBloco}>
          <img src={fono1} alt="Fonoaudiologia" />
        </div>
      </section>

      {/* Bloco 2 — Imagem esquerda, Texto direita */}
      <section className={`${styles.bloco} ${styles.blocoInvertido}`}>
        <div className={styles.imagemBloco}>
          <img src={fono2} alt="Habilidades Fonoaudiologia" />
        </div>
        <div className={styles.textoBloco}>
          <h2>O que é trabalhado nas sessões?</h2>
          <ul className={styles.lista}>
            <li>
              <strong>Comunicação:</strong> ajudar a criança a se expressar, seja por fala,
              gestos, figuras ou outros meios.{' '}
              <em>Exemplo: aprender a pedir algo que deseja, como água ou brinquedo.</em>
            </li>
            <li>
              <strong>Linguagem:</strong> desenvolver a compreensão e o uso das palavras.{' '}
              <em>Exemplo: entender comandos simples como "senta" ou "vem aqui".</em>
            </li>
            <li>
              <strong>Imitação de sons e palavras:</strong> estimular a criança a repetir sons,
              sílabas e palavras.{' '}
              <em>Exemplo: imitar sons de animais ou palavras simples do dia a dia.</em>
            </li>
            <li>
              <strong>Interação social:</strong> incentivar a comunicação com outras pessoas.{' '}
              <em>Exemplo: responder quando é chamada, brincar com outra criança ou interagir com os pais.</em>
            </li>
            <li>
              <strong>Contato visual e atenção compartilhada:</strong> ajudar a criança a olhar,
              apontar e dividir atenção com outra pessoa.{' '}
              <em>Exemplo: olhar para um objeto e depois para o adulto, demonstrando interesse.</em>
            </li>
            <li>
              <strong>Alimentação (quando necessário):</strong> trabalhar dificuldades alimentares.{' '}
              <em>Exemplo: aceitar novos alimentos ou melhorar a mastigação.</em>
            </li>
          </ul>
          <p className={styles.destaque}>
            Tudo isso é feito de forma lúdica, com brincadeiras e atividades que motivam a
            criança a participar, facilitando sua interação com o mundo.
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

export default Fono;
