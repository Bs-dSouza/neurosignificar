import React from "react";
import styles from "./Whatsapp.module.css";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <div className={styles.whatsappFixo}>
      <a
        href="https://wa.me/5511977729848?text=Gostaria%20de%20mais%20informações"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
      >
        <FaWhatsapp size={32} color="#25D366" />
      </a>
    </div>
  );
};

export default Whatsapp;
