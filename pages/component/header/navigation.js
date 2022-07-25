import Link from "next/link";
import styles from "./nav.module.css";
import About from "../../about";
function Navigation() {
  return (
    <div>
      <nav>
        <Link href="/">
          <a className={styles.link}> &nbsp; Ana sayfa &nbsp;</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}> &nbsp; Hakkımda &nbsp;</a>
        </Link>
        <br />
        <br />
      </nav>{" "}
    </div>
  );
}
export default Navigation;
