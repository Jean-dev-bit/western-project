import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
const UsersPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Rechercher un utilisateur..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Ajouter un client</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.bolder}>
            <td>Nom & Prénoms</td>
            <td>Email</td>
            <td>Date de création</td>
            <td>Rôle</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.userImage}
                />
                Abdul
              </div>
            </td>
            <td>adbul@gmail.com</td>
            <td>11.12.2001</td>
            <td>Client</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
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
          {/* 2nd users */}

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.userImage}
                />
                Solange
              </div>
            </td>
            <td>solange@gmail.com</td>
            <td>15.01.2025</td>
            <td>Client</td>
            <td>Passive</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
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

          {/* 3rd users */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.userImage}
                />
                Junior
              </div>
            </td>
            <td>junior@gmail.com</td>
            <td>10.11.2023</td>
            <td>Client</td>
            <td>Passive</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
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
          {/* 4rd users */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.userImage}
                />
                Peace
              </div>
            </td>
            <td>peace@gmail.com</td>
            <td>19.05.2021</td>
            <td>Client</td>
            <td>Passive</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
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
          {/* 5rd users */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.userImage}
                />
                Antonio
              </div>
            </td>
            <td>antonio@gmail.com</td>
            <td>22.02.2022</td>
            <td>Client</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
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
          {/* 6rd users */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.userImage}
                />
                Jean-Pierre
              </div>
            </td>
            <td>jeanpierre@gmail.com</td>
            <td>25.02.2023</td>
            <td>Client</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
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
          {/* 7rd users */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.userImage}
                />
                Romaric
              </div>
            </td>
            <td>romaric@gmail.com</td>
            <td>17.04.2024</td>
            <td>Admin</td>
            <td>Passive</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
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
          {/* 8rd users */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width="30"
                  height="30"
                  className={styles.userImage}
                />
                Marcel
              </div>
            </td>
            <td>marcel@gmail.com</td>
            <td>15.07.2024</td>
            <td>Admin</td>
            <td>Passive</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
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

export default UsersPage;
