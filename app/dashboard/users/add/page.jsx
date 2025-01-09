"use client";

import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const nom = formData.get("nom");
  const prenoms = formData.get("prenoms");
  const telephone = formData.get("telephone");
  const sexe = formData.get("sexe");
  const adresse = formData.get("address");

  const clientData = {
    nom,
    prenoms,
    telephone,
    sexe,
    adresse,
  };

  try {
    const response = await fetch("/api/addClient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clientData),
    });

    if (response.ok) {
      const data = await response.json();
      e.target.reset();

      window.location.href = "/dashboard/users";
    } else {
      const errorData = await response.json();
      console.error("Erreur lors de l'enregistrement :", errorData);
      alert(errorData.error || "Erreur lors de l'enregistrement.");
    }
  } catch (error) {
    console.error("Erreur serveur :", error);
    alert("Erreur serveur. Veuillez réessayer plus tard.");
  }
};

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input name="nom" type="text" placeholder="Nom" required />
        <input name="prenoms" type="text" placeholder="Prénoms" required />
        <input name="telephone" type="text" placeholder="(+229) 53 56 44 97" required />
        <select name="sexe" required>
          <option value="" disabled selected>
            Sexe
          </option>
          <option value="Masculin">Masculin</option>
          <option value="Féminin">Féminin</option>
          <option value="Autres">Autres</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="2"
          placeholder="Adresse du client"
        ></textarea>
        <button type="submit">Enregistrer un client</button>
      </form>
    </div>
  );
};

export default AddUserPage;
