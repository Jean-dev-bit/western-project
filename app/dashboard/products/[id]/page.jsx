import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        Undefined
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Nom de la carte</label>
          <input type="text" name="title" placeholder="Nom de la carte" />
          <label>Prix de vente</label>
          <input type="number" name="price" placeholder="Ex: 520 FCFA" />
          <label>Quantité</label>
          <input type="number" name="stock" placeholder="Quantité" />
          <label>Nom de la banque</label>
          <input type="text" name="color" placeholder="Ex : UBA" />
          {/* <label>Size</label> */}
          {/* <input name="size" placeholder="size" /> */}
          <label>Catégorie de carte</label>
          <select name="cat" id="cat">
          <option value="kitchen">Catégorie de carte</option>
            <option value="kitchen">Low</option>
            <option value="phone">Mid</option>
            <option value="computer">High</option>
          </select>
          <label>Description</label>
          <textarea name="desc" rows="5" placeholder="description"></textarea>
          <button type="submit">Mettre à jour les informations</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
