import styles from "../styles/Home.module.css";
import "remixicon/fonts/remixicon.css";
import Layout from "./component/layout";
import IconLink from "./component/iconLink";

export default function Home() {
  return (
    <Layout>
      <br />
      <br />
      <h1 className={styles.title}>Ahmet Talha Telli</h1>
      <p className={styles.description}>
        Computer Engineering &nbsp;
        <code className={styles.code}> Frontend Developer</code>
      </p>
      <IconLink />
    </Layout>
  );
}
