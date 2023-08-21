import styles from "./Button.module.css";

export default function Button({ color, text, onClick }) {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
