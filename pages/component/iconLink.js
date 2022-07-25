import "remixicon/fonts/remixicon.css";
import styles from "./iconLink.module.css";
import Link from "next/dist/client/link";

export default function IconLink() {
  return (
    <div>
      <div className={styles.grid}>
        <Link href="https://github.com/talhatelli">
          <div className={styles.IconLink}>
            <i title="Github" className="ri-github-fill"></i>
          </div>
        </Link>
        <Link href="https://www.instagram.com/ahmet_talha_telli/">
          <div className={styles.IconLink}>
            {" "}
            <i title="Instegram" className="ri-instagram-line"></i>
          </div>
        </Link>

        <Link href="https://www.linkedin.com/in/ahmet-talha-telli-09473a230/">
          <div className={styles.IconLink}>
            <i title="Linkedin" className="ri-linkedin-box-fill"></i>
          </div>
        </Link>
        <Link href="https://twitter.com/TalhaTelli7">
          <div className={styles.IconLink}>
            <i title="Twitter" className="ri-twitter-line"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}
