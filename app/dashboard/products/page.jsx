import Link from "next/link";
import Image from "next/image";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Rechercher une carte vendue..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Enregistrer une carte</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.bolders}>
            <td>Nom</td>
            <td>Description</td>
            <td>Prix vendu</td>
            <td>Date</td>
            <td>Quantité</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.productImage}
                />
                iphone Xsmas
              </div>
            </td>
            <td>128 GB Bat 70</td>
            <td>$520</td>
            <td>Oct 29 2023</td>
            <td>50</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    Voir
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Supprimer
                </button>
              </div>
            </td>
          </tr>
          {/* 2nd products */}

          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.productImage}
                />
                Tecno Camon 20 Pro
              </div>
            </td>
            <td>256 GB Ram 16 GB 5000mAh</td>
            <td>$620</td>
            <td>Nov 29 2023</td>
            <td>90</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    Voir
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Supprimer
                </button>
              </div>
            </td>
          </tr>

          {/* 3rd products */}
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.productImage}
                />
                Samsung S24
              </div>
            </td>
            <td>64 GB Ram 12 GB 5000mAh</td>
            <td>$600</td>
            <td>Jan 12 2023</td>
            <td>15</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    Voir
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Supprimer
                </button>
              </div>
            </td>
          </tr>
          {/* 4rd products */}
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.productImage}
                />
                itel P40
              </div>
            </td>
            <td>32 GB Ram 4 GB 6000 mAh</td>
            <td>$120</td>
            <td>Feb 29 2023</td>
            <td>11</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    Voir
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Supprimer
                </button>
              </div>
            </td>
          </tr>
          {/* 5rd products */}
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.productImage}
                />
                Infinix
              </div>
            </td>
            <td>32 GB Ram 2 GB 6000mAh</td>
            <td>$220</td>
            <td>Jul 29 2023</td>
            <td>80</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    Voir
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Supprimer
                </button>
              </div>
            </td>
          </tr>
          {/* 6rd products */}
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.productImage}
                />
                Redmi
              </div>
            </td>
            <td>128 GB Ram 8 GB 5000mAh</td>
            <td>$320</td>
            <td>June 29 2023</td>
            <td>40</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    Voir
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Supprimer
                </button>
              </div>
            </td>
          </tr>
          {/* 7rd products */}
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.productImage}
                />
                Nokia
              </div>
            </td>
            <td>64 GB Ram 8 GB 6000mAh</td>
            <td>$420</td>
            <td>March 29 2023</td>
            <td>42</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    Voir
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Supprimer
                </button>
              </div>
            </td>
          </tr>
          {/* 8rd products */}
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.productImage}
                />
                iphone 12 Pro Max
              </div>
            </td>
            <td>256 GB Bat 95 id off</td>
            <td>$920</td>
            <td>Feb 29 2021</td>
            <td>100</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    Voir
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Supprimer
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
