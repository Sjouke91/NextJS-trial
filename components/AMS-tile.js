import styles from "../styles/ams.module.scss";
import Icon from "../icons/icon.svg";

export default function AmsTile() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon />
      </div>

      <div className={styles.textInput}>
        <h3 className={styles.title}>Give us a call</h3>
        <p className={styles.body}>
          Call +31 (0)20 709 3000. From Monday until Thursday between 9 AM and 5
          PM; Friday between 9 AM and 3 PM.
        </p>
      </div>
      <button className={styles.button}>CALL NOW</button>
    </div>
  );
}
