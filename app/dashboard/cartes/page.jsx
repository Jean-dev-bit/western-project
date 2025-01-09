"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";

const handleDelete = async (id) => {
  try {
    const res = await fetch(`/api/card/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Erreur lors de la suppression de la carte.");
    }
    alert("Carte supprimée avec succès !");
    window.location.reload();
  } catch (error) {
    console.error(error);
    alert("Une erreur est survenue lors de la suppression.");
  }
};

const ProductsPage = () => {
  const [cards, setCards] = useState([]);
  const [totals, setTotals] = useState({ totalSales: 0, totalCommission: 0 });

  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch("http://localhost:3000/api/card");
      if (res.ok) {
        const data = await res.json();
        setCards(data);

        const totalSales = data.reduce(
          (acc, card) => acc + card.sellingPrice * card.quantity,
          0
        );
        const totalCommission = data.reduce(
          (acc, card) => acc + card.commission,
          0
        );

        setTotals({ totalSales, totalCommission });
      } else {
        console.error("Erreur lors de la récupération des cartes");
        alert("Erreur lors de la récupération des cartes.");
      }
    };

    fetchCards();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Rechercher une carte vendue..." />
        <Link href="/dashboard/cartes/add">
          <button className={styles.addButton}>Enregistrer une carte</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.bolders}>
            <td>Clients</td>
            <td>Banque</td>
            <td>Type de carte</td>
            <td>Quantité</td>
            <td>Prix de vente</td>
            <td>Commission</td>
            <td>Observations</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr key={card.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src="/noproduct.jpg"
                    alt="Carte"
                    width="30"
                    height="30"
                    className={styles.productImage}
                  />
                  {card.client
                    ? `${card.client.nom} ${card.client.prenoms}`
                    : "Client inconnu"}
                </div>
              </td>
              <td>{card.bankName}</td>
              <td>{card.cardType}</td>
              <td>{card.quantity}</td>
              <td>{card.sellingPrice}</td>
              <td>{card.commission}</td>
              <td>{card.observations}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/cartes/${card.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Voir
                    </button>
                  </Link>
                  <button
                    className={`${styles.button} ${styles.delete}`}
                    onClick={() => handleDelete(card.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.totals}>
        <p>Total des cartes vendues : {totals.totalSales.toFixed(0)} FCFA</p>
        <p>Total des commissions : {totals.totalCommission.toFixed(0)} FCFA</p>
      </div>

      <Pagination />
    </div>
  );
};

export default ProductsPage;
