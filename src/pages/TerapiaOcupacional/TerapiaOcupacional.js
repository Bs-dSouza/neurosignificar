import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TerapiaOcupacional.module.css';
import img1 from '../../Imagens/to1.png';
import img2 from '../../Imagens/to2.png';

const TerapiaOcupacional = () => {
  return (
    <div className={styles.pagina}>
      <div className={styles.hero}>
        <span className={styles.tag}>Especialidade</span>
        <h1>Terapia Ocupacional</h1>
        <p>Intervenções que estimulam autonomia, funcionalidade e participação nas rotinas da criança</p>
      </div>

      <section className={styles.bloco}>
        <div className={styles.textoBloco}>
          <h2>O que é a Terapia Ocupacional?</h2>
          <p>
            A Terapia Ocupacional ajuda crianças e adolescentes a desenvolverem habilidades
            necessárias para participar com mais independência das atividades do cotidiano,
            como brincar, se alimentar, se vestir, estudar e interagir com outras pessoas.
          </p>
          <p>
            O atendimento considera o desenvolvimento motor, cognitivo, sensorial e emocional,
            sempre respeitando as necessidades e o ritmo de cada paciente. O objetivo é tornar
            a rotina mais funcional, confortável e significativa para a criança e sua família.
          </p>
          <p>
            Essa atuação é especialmente importante quando existem dificuldades de coordenação,
            planejamento motor, seletividade alimentar, organização sensorial ou desafios para
            realizar tarefas do dia a dia com autonomia.
          </p>
        </div>
        <div className={styles.imagemBloco}>
          <img src={img1} alt="Atendimento de Terapia Ocupacional" />
        </div>
      </section>

      <section className={`${styles.bloco} ${styles.blocoInvertido}`}>
        <div className={styles.imagemBloco}>
          <img src={img2} alt="Desenvolvimento de autonomia infantil" />
        </div>
        <div className={styles.textoBloco}>
          <h2>O que pode ser trabalhado nas sessões?</h2>
          <ul className={styles.lista}>
            <li>
              <strong>Integração sensorial:</strong> ajudar a criança a lidar melhor com sons,
              texturas, movimentos, luzes e outros estímulos do ambiente.
            </li>
            <li>
              <strong>Coordenação motora fina:</strong> desenvolver movimentos mais precisos das mãos.
              <em> Exemplo: segurar lápis, recortar, encaixar e abotoar roupas.</em>
            </li>
            <li>
              <strong>Autonomia nas atividades diárias:</strong> estimular independência em tarefas
              como alimentação, higiene e vestir-se.
            </li>
            <li>
              <strong>Organização e planejamento:</strong> trabalhar a sequência de ações e a execução
              de tarefas com mais segurança e funcionalidade.
            </li>
            <li>
              <strong>Brincar funcional:</strong> ampliar repertório lúdico, criatividade e interação
              por meio de atividades adequadas ao desenvolvimento.
            </li>
            <li>
              <strong>Adaptação da rotina:</strong> orientar família e escola para facilitar a
              participação da criança nos diferentes ambientes.
            </li>
          </ul>
          <p className={styles.destaque}>
            O plano terapêutico é individualizado e construído de acordo com os objetivos da
            criança, buscando ganhos reais para o dia a dia e mais qualidade de vida para toda a família.
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

export default TerapiaOcupacional;