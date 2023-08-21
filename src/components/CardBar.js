import Card from "./util/Card";
import styles from "./CardBar.module.css";
import Button from "./util/Button";
import { useState } from "react";

export default function CardBar() {
  const [inputText, setInputText] = useState("");
  const [confirmActive, setConfirmActive] = useState("");
  const classNames = [styles.confirmationText, confirmActive];

  const textChangeHandler = (e) => {
    const text = e.target.value;
    if (text.trim().length > 5) {
      setInputText(text);
    }
  };

  const onClickHandler = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(inputText);
      setConfirmActive(styles.visible);
      setTimeout(() => setConfirmActive(""), 1300);
    } else {
      console.log("Clipboard API not available");
    }
  };

  return (
    <div className={styles.cardBar}>
      <div className={styles.card}>
        <Card>
          <textarea
            onChange={textChangeHandler}
            className={styles.textArea}
            placeholder="Geben Sie Ihren Text ein"
          ></textarea>
        </Card>
      </div>

      <div className={styles.card}>
        <Card>
          <p>
            Bitte geben Sie Ihren Text in das linke Feld ein. Wählen Sie in der
            Leiste oben Länge und Temperatur des gewünschten Outputs. Ein Klick
            auf den Button kopiert den Prompt anschließend direkt in die
            Zwischenablage.
          </p>
          <p>Mit Ctrl + V können Sie ihn dann in ChatGPT einfügen.</p>
          <Button
            color="#a1104a"
            text="Prompt generieren"
            onClick={onClickHandler}
          />

          <p className={classNames.join(" ")}>
            Prompt in Zwischenablage kopiert!
          </p>
        </Card>
      </div>
    </div>
  );
}
