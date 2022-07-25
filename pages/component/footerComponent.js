import "remixicon/fonts/remixicon.css";
import styles from "./footerComponent.module.css";
export default function Footer() {
  return (
    <di>
      <footer className={styles.footer}>
        <a>
          Devoloper by Ahmet Talha <span className={styles.logo}></span>
        </a>
      </footer>
    </di>
  );
}
