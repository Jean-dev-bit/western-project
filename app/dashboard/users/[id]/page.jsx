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
          <label>Nom</label>
          <input type="text" name="username" placeholder="Nom" />
          <label>Prénoms</label>
          <input name="prenoms" type="text" placeholder="Prénoms" required />
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
            rows="2"
            placeholder="Cotonou"
          ></textarea>
          <label>Sexe</label>
          <select name="sexe" required>
            <option value="" disabled selected>
              Sexe
            </option>
            <option value="Masculin">Masculin</option>
            <option value="Féminin">Féminin</option>
            <option value="Autres">Autres</option>
          </select>
          <button type="submit">Mettre à jour les informations</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
