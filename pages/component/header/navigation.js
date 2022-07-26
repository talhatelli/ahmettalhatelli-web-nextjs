import Link from "next/link";
import styles from "./nav.module.css";
import About from "../../about";
function Navigation() {
  return (
    <div className={styles.link}>
      <nav>
        <Link href="/">
          <a> &nbsp; Ana sayfa &nbsp;</a>
        </Link>
        <Link href="/about">
          <a> &nbsp; Hakkımda &nbsp;</a>
        </Link>
        <br />
        <br />
      </nav>{" "}
    </div>
  );
}
export default Navigation;
