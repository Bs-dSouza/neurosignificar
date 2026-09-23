import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AvaliacaoNeuropsicologica.module.css';
import img1 from '../../Imagens/avaliacaoneuro.png';
import img2 from '../../Imagens/sala2.jpeg';

const AvaliacaoNeuropsicologica = () => {
  return (
    <div className={styles.pagina}>
      <div className={styles.hero}>
        <span className={styles.tag}>Especialidade</span>
        <h1>Avaliação Neuropsicológica</h1>
        <p>Investigação clínica detalhada das habilidades cognitivas, emocionais e comportamentais</p>
      </div>

      <section className={styles.bloco}>
        <div className={styles.textoBloco}>
          <h2>O que é a avaliação neuropsicológica?</h2>
          <p>
            A avaliação neuropsicológica é um processo clínico que investiga como estão
            funcionando habilidades como atenção, memória, linguagem, raciocínio, aprendizagem,
            percepção, funções executivas e regulação emocional.
          </p>
          <p>
            Por meio de entrevistas, observações e instrumentos específicos, é possível compreender
            o perfil cognitivo e comportamental do paciente, identificando potencialidades,
            dificuldades e necessidades de acompanhamento.
          </p>
          <p>
            Esse processo pode auxiliar em hipóteses diagnósticas, no planejamento terapêutico e
            em orientações mais assertivas para família, escola e demais profissionais envolvidos.
          </p>
        </div>
        <div className={styles.imagemBloco}>
          <img src={img1} alt="Ambiente clínico para avaliação neuropsicológica" />
        </div>
      </section>

      <section className={`${styles.bloco} ${styles.blocoInvertido}`}>
        <div className={styles.imagemBloco}>
          <img src={img2} alt="Acompanhamento e investigação cognitiva" />
        </div>
        <div className={styles.textoBloco}>
          <h2>Quando ela pode ser indicada?</h2>
          <ul className={styles.lista}>
            <li>
              <strong>Dificuldades de aprendizagem:</strong> quando há queixas persistentes em leitura,
              escrita, matemática ou compreensão escolar.
            </li>
            <li>
              <strong>Problemas de atenção e organização:</strong> investigar desatenção, impulsividade,
              lentidão ou dificuldade de planejamento.
            </li>
            <li>
              <strong>Questões de memória e linguagem:</strong> entender dificuldades para reter
              informações, se comunicar ou compreender comandos.
            </li>
            <li>
              <strong>Suspeitas diagnósticas:</strong> contribuir com a investigação de TEA, TDAH,
              deficiência intelectual, transtornos de aprendizagem e outras condições.
            </li>
            <li>
              <strong>Planejamento de intervenções:</strong> orientar tratamentos, adaptações escolares
              e metas terapêuticas mais adequadas.
            </li>
            <li>
              <strong>Devolutiva para família e escola:</strong> oferecer um panorama claro das
              necessidades e potencialidades do paciente.
            </li>
          </ul>
          <p className={styles.destaque}>
            Ao final, a avaliação reúne informações importantes para decisões clínicas e educacionais,
            trazendo mais clareza sobre como apoiar o desenvolvimento de forma efetiva.
          </p>
        </div>
      </section>

      <div className={styles.cta}>
        <h2>Quer saber mais ou agendar uma avaliação?</h2>
        <p>Entre em contato com nossa equipe. Estamos prontos para ajudar.</p>
        <Link to="/contato" className={styles.btnContato}>Entre em Contato</Link>
      </div>
    </div>
  );
};

export default AvaliacaoNeuropsicologica;