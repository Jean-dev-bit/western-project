import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.navbar}>
        <div className={styles.logo}>Western <span>Agency</span></div>
        <nav className={styles.navLinks}>
          <Link href="/features" className={styles.navItem}>
            ACCEUIL
          </Link>
          <Link href="/pricing" className={styles.navItem}>
            TARIFS
          </Link>
          <Link href="/contact" className={styles.navItem}>
            CONTACT
          </Link>
        </nav>
        <div className={styles.navActions}>
          <Link href="/dashboard" className={styles.adminButton}>
            Espace administrateur
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Simplifiez vos finances avec <span>Western Agency</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Western Agency est bien plus qu’une simple application : c’est votre partenaire financier.
            Que vous soyez un entrepreneur cherchant à suivre vos ventes ou un professionnel souhaitant optimiser ses transactions, notre solution intuitive met à votre disposition des outils puissants pour centraliser la gestion de vos finances.
            Visualisez vos données en temps réel, identifiez les opportunités de croissance, et prenez des décisions éclairées, le tout dans une interface simple et élégante.
            Avec Western Agency, gérer vos finances n’a jamais été aussi facile et stratégique.
          </p>
          <Link href="/signup" className={styles.ctaButton}>
            Commencez Maintenant
          </Link>
        </div>
        <Image
          src="/finance.jpg"
          alt=""
          width={500}
          height={400}
          className={styles.heroImage}
        />
      </main>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Pourquoi nous choisir ?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            {/* <Image src="/secure.png" alt="Secure" width={50} height={50} /> */}
            <h3>Sécurité</h3>
            <p>La sécurité de vos données et de vos transactions est notre priorité.
              Nous utilisons des technologies de chiffrement avancées, des outils de détection des fraudes basés sur l'intelligence artificielle, et respectons les normes les plus strictes en matière de conformité réglementaire.
              Vous pouvez gérer vos finances en toute confiance, en sachant que vos informations sont protégées à chaque étape.</p>
          </div>
          <div className={styles.featureCard}>
            {/* <Image src="/analytics.png" alt="Analytics" width={50} height={50} /> */}
            <h3>Analyse Avancée</h3>
            <p>
              Transformez vos données financières en informations stratégiques grâce à nos outils d'analyse avancée.
              Profitez de tableaux de bord interactifs, de rapports personnalisés et de prévisions basées sur l'intelligence artificielle pour suivre vos performances et anticiper vos opportunités.
              Que ce soit pour optimiser vos dépenses, identifier des tendances ou planifier l'avenir, Western Agency vous donne les clés pour une gestion financière intelligente.
            </p>
          </div>
          <div className={styles.featureCard}>
            {/* <Image src="/support.png" alt="Support" width={50} height={50} /> */}
            <h3>Support 24/7</h3>
            <p>
              Avec Western Agency, vous n’êtes jamais seul dans la gestion de vos finances. Notre équipe de support dédiée est disponible 24h/24 et 7j/7 pour répondre à toutes vos questions, résoudre vos problèmes et vous guider à chaque étape.
              Que ce soit par chat, email ou téléphone, nous sommes là pour garantir votre tranquillité d'esprit et une expérience utilisateur fluide.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>Western Agency</div>
          <nav className={styles.footerNav}>
            <Link href="/privacy" className={styles.footerLink}>
              Politique de Confidentialité
            </Link>
            <Link href="/terms" className={styles.footerLink}>
              Conditions d'Utilisation
            </Link>
            <Link href="/help" className={styles.footerLink}>
              Aide
            </Link>
          </nav>
        </div>
        <p className={styles.footerCopy}>
          © 2025 Western Agency. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
