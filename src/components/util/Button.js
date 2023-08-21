import styles from "./Button.module.css";

export default function Button({ color, text }) {
  return (
    <button className={styles.button} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
