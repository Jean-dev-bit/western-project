"use client";
import { useState } from "react";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setClients([]);
      return;
    }

    try {
      const res = await fetch(`/api/addClient/search?search=${value}`);
      if (res.ok) {
        const data = await res.json();
        setClients(data);
      } else {
        console.error("Erreur lors de la recherche des clients.");
      }
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  const handleSelectClient = (client) => {
    setSelectedClient(client);
    setSearchTerm(`${client.nom} ${client.prenoms}`); 
    setClients([]); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedClient) {
      alert("Veuillez sélectionner un client.");
      return;
    }


    const formData = new FormData(e.target);
    const data = {
      clientId: selectedClient.id,
      bankName: formData.get("bankName"),
      cardType: formData.get("cardType"),
      quantity: parseInt(formData.get("quantity")),
      sellingPrice: parseFloat(formData.get("sellingPrice")),
      commission: parseFloat(formData.get("commission")),
      observations: formData.get("observations"),
    };

    try {
      const res = await fetch("/api/card", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Carte enregistrée avec succès !");
        e.target.reset();
        window.location.href = "/dashboard/cartes";
        setSelectedClient(null);
        setSearchTerm("");
      } else {
        console.error("Erreur lors de l'enregistrement de la carte.");
        alert("Une erreur est survenue.");
      }
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Clients"
            value={searchTerm}
            onChange={handleSearch}
            required
          />
          {clients.length > 0 && (
            <ul className={styles.suggestions}>
              {clients.map((client) => (
                <li
                  key={client.id}
                  onClick={() => handleSelectClient(client)}
                  className={styles.suggestionItem}
                >
                  {client.nom} {client.prenoms}
                </li>
              ))}
            </ul>
          )}
        </div>
        <input
          type="text"
          name="bankName"
          placeholder="Nom de Banque"
          required
        />
        <select name="cardType" id="cat" required>
          <option value="">Choisir le type</option>
          <option value="Low">Low</option>
          <option value="Mid">Mid</option>
          <option value="High">High</option>
        </select>
        <input
          type="number"
          name="quantity"
          placeholder="Quantité achetée"
          required
        />
        <input
          type="text"
          name="sellingPrice"
          placeholder="Prix de vente"
          required
        />
        <input
          type="text"
          name="commission"
          placeholder="Commission"
          required
        />
        <textarea
          name="observations"
          id="observations"
          rows="2"
          placeholder="Observations"
        ></textarea>
        <button type="submit">Enregistrer l&apos;opération</button>
      </form>
    </div>
  );
};

export default AddProductPage;
