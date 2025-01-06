"use client";

import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";



const Card = ({label, value}) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{label}</span>
        <span className={styles.number}>{value}</span>
      </div>
    </div>
  );
};

export default Card;
