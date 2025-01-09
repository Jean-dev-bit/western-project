import styles from "@/app/ui/dashboard/operations/operations.module.css";
import Search from "@/app/ui/dashboard/search/search";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

const Operations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Rechercher une opération" />
        <Link href="/dashboard/operations/add">
          <button className={styles.addButton}>Enregistrer une opération</button>
        </Link>
      </div>
      <div className={styles.date}>
        <div className={styles.dateField}>
          <label htmlFor="start">Date de début</label>
          <input type="date" id="start" />
        </div>
        <div className={styles.dateField}>
          <label htmlFor="end">Date de fin</label>
          <input type="date" id="end" />
        </div>
      </div>

      <table className={styles.Operations}>
        <thead>
          <tr className={styles.bolders}>
            <td>Numéro Opération</td>
            <td>Type de l'opération</td>
            <td>Réseaux</td>
            <td>Montant</td>
            <td>Commission</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.bolders}>
            <td>OP-01-2025</td>
            <td>Dépôt</td>
            <td>MTN</td>
            <td>100000</td>
            <td>500</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    Voir
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Supprimer
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={styles.totals}>
        <p className="">Total des opérations : </p>
        <p className="">Total des commissions : </p>
        <span className={styles.download}>
          {" "}
          <ArrowDownToLine size={15} /> Télécharger la version PDF
        </span>
      </div>
    </div>
  );
};

export default Operations;
