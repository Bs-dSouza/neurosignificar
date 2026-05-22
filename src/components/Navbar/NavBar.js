import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../Imagens/logoFooterMenor.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      {/* Faixa de conscientização — Transtorno do Espectro Autista */}
      <div className={styles.topbar}>
        <span className={styles.topbarText}>
          ♾&ensp;Especializados no atendimento ao{" "}
          <strong>Transtorno do Espectro Autista (TEA)</strong>
          <span className={styles.topbarDivider}>·</span>Psicologia ABA
          <span className={styles.topbarDivider}>·</span>Fonoaudiologia
          <span className={styles.topbarDivider}>·</span>Psicopedagogia
        </span>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.conteiner}>
          {/* Logo à esquerda */}
          <div className={styles.nome_logo}>
            <Link to="/">
              <img alt="NeuroSignificar" className={styles.logotipo} src={logo} />
            </Link>
          </div>

          {/* Botão hamburguer (visível apenas no mobile) */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span className={menuOpen ? styles.barraAberta1 : ""}></span>
            <span className={menuOpen ? styles.barraAberta2 : ""}></span>
            <span className={menuOpen ? styles.barraAberta3 : ""}></span>
          </button>

          {/* Menu à direita */}
          <ul className={`${styles.listBrand} ${menuOpen ? styles.menuOpen : ""}`}>
            <li className={styles.Item_Menu}>
              <Link to="/" onClick={() => setMenuOpen(false)}>Início</Link>
            </li>
            <li className={styles.Item_Menu}>
              <Link to="/about" onClick={() => setMenuOpen(false)}>Quem Somos</Link>
            </li>
            <li className={styles.Item_Menu}>
              <Link to="/servico" onClick={() => setMenuOpen(false)}>Especialidades</Link>
            </li>
            <li className={`${styles.Item_Menu} ${styles.Item_Cta}`}>
              <Link to="/contato" onClick={() => setMenuOpen(false)}>
                Agende uma Consulta
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
