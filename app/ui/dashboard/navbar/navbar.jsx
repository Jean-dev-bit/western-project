"use client";

import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>

      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Recherche..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          {/* 20 avant */}
          <MdOutlineChat size={15} />
          <MdNotifications size={15} />
          <MdPublic size={15} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
