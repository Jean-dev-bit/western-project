import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Undefined
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Nom d&apos;utilisateur</label>
          <input type="text" name="username" placeholder="Nom d'utilisateur" />
          <label>Email</label>
          <input type="email" name="username" placeholder="western@gmail.com" />
          <label>Mot de Passe</label>
          <input type="password" name="username" />
          <label>Téléphone</label>
          <input
            type="phone"
            name="username"
            placeholder="(+229) 53 56 44 97"
          />
          <label>Adresse</label>
          <textarea
            name="address"
            id="address"
            // rows-16 avant
            rows="5"
            placeholder="Cotonou..."
          ></textarea>
          <label>Administrateur ?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Oui</option>
            <option value={false}>Oui</option>
          </select>
          <label>Active ?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Oui</option>
            <option value={false}>Non</option>
          </select>
          <button type="submit">Mettre à jour les informations</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
