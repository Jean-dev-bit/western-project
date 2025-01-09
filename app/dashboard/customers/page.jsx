"use client";

import { useEffect, useState } from "react";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const handleDelete = async (id) => {
  try {
    const res = await fetch(`/api/addClient/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Erreur lors de la suppression de l'utilisateur.");
    }
    alert("Utilisateur supprimé avec succès !");
    window.location.reload();
  } catch (error) {
    console.error(error);
    alert("Une erreur est survenue lors de la suppression.");
  }
};

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("http://localhost:3000/api/addClient");
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      } else {
        console.error("Erreur lors de la récupération des utilisateurs");
        alert("Erreur lors de la récupération des utilisateurs.");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Rechercher un utilisateur..." />
        <Link href="/dashboard/customers/add">
          <button className={styles.addButton}>Ajouter un client</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.bolder}>
            <td>Nom</td>
            <td>Prénoms</td>
            <td>Téléphone</td>
            <td>Sexe</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width="30"
                    height="30"
                    className={styles.userImage}
                  />
                  {user.nom}
                </div>
              </td>
              <td>{user.prenoms}</td>
              <td>{user.telephone}</td>
              <td>{user.sexe}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/customers/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Voir
                    </button>
                  </Link>
                  <button
                    className={`${styles.button} ${styles.delete}`}
                    onClick={() => handleDelete(user.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
