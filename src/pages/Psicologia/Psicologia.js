import React from 'react';
import styles from './Psicologia.module.css';
import aba1 from './IMG/aba1.jpg';
import aba2 from './IMG/aba2.jpg';
import { Link } from 'react-router-dom';

const Psicologia = () => {
  return (
    <div className={styles.pagina}>

      {/* Hero */}
      <div className={styles.hero}>
        <span className={styles.tag}>Especialidade</span>
        <h1>Psicologia ABA</h1>
        <p>Análise do Comportamento Aplicada para o desenvolvimento de cada criança</p>
      </div>

      {/* Bloco 1 — Texto esquerda, Imagem direita */}
      <section className={styles.bloco}>
        <div className={styles.textoBloco}>
          <h2>O que é a terapia ABA?</h2>
          <p>
            ABA (Análise do Comportamento Aplicada) é uma forma científica de entender como a
            criança aprende e como podemos ajudá-la a desenvolver novas habilidades no dia a dia.
          </p>
          <p>
            De maneira simples, a ABA observa o comportamento da criança e usa estratégias
            positivas para ensinar coisas importantes, como se comunicar melhor, brincar, prestar
            atenção, seguir instruções e se tornar mais independente.
          </p>
          <p>
            Ela é muito utilizada no acompanhamento de crianças com autismo, pois respeita o tempo
            de cada uma e trabalha de forma individualizada, focando sempre no desenvolvimento e na
            qualidade de vida.
          </p>
          <p>
            <strong>Um exemplo prático:</strong> se a criança ainda não pede água falando ou
            apontando, o profissional pode ensinar isso passo a passo. Quando a criança tenta se
            comunicar da forma correta, ela recebe um incentivo (como elogios ou algo que ela
            goste), aumentando as chances de repetir esse comportamento. Com o tempo, isso se torna
            algo natural para ela.
          </p>
        </div>
        <div className={styles.imagemBloco}>
          <img src={aba1} alt="Terapia ABA" />
        </div>
      </section>

      {/* Bloco 2 — Imagem esquerda, Texto direita */}
      <section className={`${styles.bloco} ${styles.blocoInvertido}`}>
        <div className={styles.imagemBloco}>
          <img src={aba2} alt="Habilidades ABA" />
        </div>
        <div className={styles.textoBloco}>
          <h2>O que é trabalhado na terapia?</h2>
          <p>Na terapia ABA, são trabalhadas diversas habilidades importantes para o desenvolvimento
            da criança, sempre de forma individualizada e com atividades práticas do dia a dia:</p>
          <ul className={styles.lista}>
            <li>
              <strong>Comunicação:</strong> ensinar a criança a pedir o que deseja, seja falando,
              apontando ou usando figuras.{' '}
              <em>Exemplo: aprender a pedir água, brinquedos ou ajuda.</em>
            </li>
            <li>
              <strong>Contato visual e atenção:</strong> ajudar a criança a olhar para quem está
              falando e manter o foco por mais tempo.{' '}
              <em>Exemplo: olhar quando é chamada pelo nome.</em>
            </li>
            <li>
              <strong>Seguir instruções:</strong> ensinar comandos simples e depois mais complexos.{' '}
              <em>Exemplo: “pegue o brinquedo”, “guarde na caixa”.</em>
            </li>
            <li>
              <strong>Habilidades sociais:</strong> desenvolver interação com outras pessoas.{' '}
              <em>Exemplo: aprender a brincar junto, esperar a vez e dividir brinquedos.</em>
            </li>
            <li>
              <strong>Autonomia:</strong> estimular independência nas atividades do dia a dia.{' '}
              <em>Exemplo: escovar os dentes, se vestir ou comer sozinho.</em>
            </li>
            <li>
              <strong>Redução de comportamentos inadequados:</strong> trabalhar comportamentos que
              podem atrapalhar o desenvolvimento.{' '}
              <em>Exemplo: substituir choros ou birras por formas de comunicação mais adequadas.</em>
            </li>
          </ul>
          <p className={styles.destaque}>
            Tudo isso é feito de forma leve, com reforços positivos (elogios, brincadeiras,
            recompensas) para motivar a criança a aprender. O foco da ABA é sempre ajudar no
            desenvolvimento, respeitando o tempo e as necessidades de cada criança.
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

export default Psicologia;
