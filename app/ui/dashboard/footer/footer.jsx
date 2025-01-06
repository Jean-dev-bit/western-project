"use client";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Western-Agency</div>
      <div className={styles.text}>&copy; Tous droits reservés. Propulsé par ApexDigit</div>
    </div>
  );
};

export default Footer;
