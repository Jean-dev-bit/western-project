import styles from "@/app/ui/dashboard/operations/add/add.module.css";
import { Check, DraftingCompass, Save } from "lucide-react";

const AddOperationPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        {/* <div className={styles.searchContainer}>
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
        </div> */}
        <input
          type="text"
          name="numero"
          placeholder="Numéro de l'opération (OP-01-2025)"
          required
        />
        <select name="cardType" id="cat" required>
          <option value="">Type de l'opération</option>
          <option>Dépôt</option>
          <option>Retrait</option>
          <option>Crédits</option>
        </select>
        <select name="cardType" id="cat" required>
          <option value="">Opérateurs mobiles</option>
          <option>MTN</option>
          <option>MoneyGram</option>
          <option>MOOV</option>
          <option>CELTIS</option>
          <option>Ria</option>
        </select>
        <input type="text" name="sellingPrice" placeholder="Montant" required />
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
        <div className={styles.button}>
          <button type="submit" className={styles.draft}>
            <DraftingCompass size={15} />
            Brouillon</button>
          <button type="submit" className={styles.save}>
            <Save size={15} />
            Enregistrer l&apos;opération</button>
          <button type="submit" className={styles.validate}>
            <Check size={15} />
            Valider l&apos;opération</button>
        </div>
      </form>
    </div>
  );
};

export default AddOperationPage;