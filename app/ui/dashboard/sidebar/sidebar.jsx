import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import Image from "next/image";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdHelpCenter,
  MdPeople,
  MdOutlineSettings,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Tableau de bord",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Clients",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Cartes",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transfert rapide",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
      {
        title: "Ventes de Crédits",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
      {
        title: "Recharge abonnement Canal +",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
      {
        title: "Facture SBEE / SONEB",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },

  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Utilisateurs",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt="Logo"
          // 50
          width="40"
          height="40"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Jean-Baptiste</span>
          <span className={styles.userTitle}>Administrateur</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
