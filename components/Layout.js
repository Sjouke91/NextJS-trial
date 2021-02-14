import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar.js";
import AmsTile from "./AMS-tile.js";
import AmsTileStyled from "./AMS-tile-styled.js";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <AmsTile />
          <AmsTileStyled />
          {children}
        </main>
      </div>
    </>
  );
}
