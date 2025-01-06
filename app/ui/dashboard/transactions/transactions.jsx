"use client";

import styles from "./transactions.module.css";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Dernières Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableau}>
            <td>Nom & Prénoms</td>
            <td>Status</td>
            <td>Date</td>
            <td>Revenues</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/placeholder.jpg"
                  alt=""
                  // 40 après
                  width={30}
                  height={30}
                  className={styles.userImage}
                />
                Samson
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                attente
              </span>
            </td>
            <td>18.05.2024</td>
            <td>30200 FCFA</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/placeholder.jpg"
                  alt=""
                  width={30}
                  height={30}
                  className={styles.userImage}
                />
                Uriel
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>valider</span>
            </td>
            <td>12.01.2024</td>
            <td>45236 FCFA</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/placeholder.jpg"
                  alt=""
                  width={30}
                  height={30}
                  className={styles.userImage}
                />
                Berlias
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                annuler
              </span>
            </td>
            <td>25.02.2024</td>
            <td>56234 FCFA</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/placeholder.jpg"
                  alt=""
                  width={30}
                  height={30}
                  className={styles.userImage}
                />
                Constant
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                attente
              </span>
            </td>
            <td>27.02.2024</td>
            <td>70895 FCFA</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/placeholder.jpg"
                  alt=""
                  width={30}
                  height={30}
                  className={styles.userImage}
                />
                Judith
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>valider</span>
            </td>
            <td>22.04.2024</td>
            <td>85697 FCFA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
