import styles from "@/app/ui/signup/signup.module.css";
import Link from "next/link.js";

const SignUp = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1 className={styles.title}>Inscrivez-vous 😊👇</h1>
        <input type="text" name="lastname" id="lastname" placeholder="Nom" />
        <input type="text" name="name" id="name" placeholder="Prénoms" />
        <input type="text" placeholder="Nom d'utilisateur" />
        <input type="email" placeholder="Email" />
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Numéro de téléphone"
        />
        {/* <div className={styles.check}>
          <label className={styles.name}>
            Administrateur
            <input type="checkbox" name="check" id="check" />
          </label>
          <label className={styles.name}>
            Employé
            <input type="checkbox" name="check" id="check" />
          </label>
        </div> */}
        <button type="submit">Connexion</button>
        <span className={styles.footer}>
          Avez-vous déjà un compte ?
          <Link href="/login" className={styles.inscrit}>
            {" "}
            Connectez-vous
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
