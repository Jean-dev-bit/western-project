import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Nom de la Banque" required />
        <select name="cat" id="cat">
          <option value="general">Choisir le type</option>
          <option value="kitchen">Low</option>
          <option value="phone">Mid</option>
          <option value="computer">High</option>
        </select>
        <input type="text" placeholder="Prix de vente" name="price" required />
        <input
          type="text"
          placeholder="Commission"
          name="commission"
          required
        />
        {/* <input type="text" placeholder="color" name="color" required />
        <input type="text" placeholder="size" name="size" required /> */}
        <textarea
          name="desc"
          id="desc"
          rows="5"
          // 16 avant
          placeholder="description"
        ></textarea>
        <button type="submit">Enregistrer l&apos;opération</button>
      </form>
    </div>
  );
};

export default AddProductPage;
