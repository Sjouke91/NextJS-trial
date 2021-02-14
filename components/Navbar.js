import styles from "../styles/Nav.module.css";
import Link from "next/Link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.listParent}>
        <li className={styles.listItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
