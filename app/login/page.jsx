import styles from "@/app/ui/login/login.module.css";
import Link from "next/link.js";

const Login = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1 className={styles.title}>Connectez-vous 😊👇</h1>
        <input type="text" placeholder="Nom d'utilisateur" />
        <input type="email" placeholder="Email" />
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Numéro de téléphone"
        />
        <button type="submit">Connexion</button>
        <span className={styles.footer}>
          Si vous n&apos;avez pas un compte,{" "}
          <Link href="/signup" className={styles.inscrit}>
            Inscrivez-vous par ici
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
