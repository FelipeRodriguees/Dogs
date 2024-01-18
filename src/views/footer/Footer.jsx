import React from "react";
import styles from "./Footer.module.css";
import DogsIconSvg from "../../assets/dogs-footer.svg?react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <DogsIconSvg />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
