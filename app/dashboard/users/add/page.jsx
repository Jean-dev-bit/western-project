import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Nom d'Utilisateur" required />
        <input type="email" placeholder="Email" required />
        <input
          type="password"
          placeholder="Mot de Passe"
          name="password"
          required
        />
        <input type="phone" placeholder="Numéro de Téléphone" name="phone" required />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>
             Administrateur ?
          </option>
          <option value={true}>Oui</option>
          <option value={false}>Non</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>
            Active ?
          </option>
          <option value={true}>Oui</option>
          <option value={false}>Non</option>
        </select>
        <textarea
          name="address"
          id="address"
          // rows 16 avant
          rows="5"
          placeholder="Une petite description"
        ></textarea>
        <button type="submit">Enregistrer un client</button>
      </form>
    </div>
  );
};

export default AddUserPage;
