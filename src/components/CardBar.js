import Card from "./util/Card";
import styles from "./CardBar.module.css";
import Button from "./util/Button";
import { useState } from "react";

export default function CardBar(props) {
  const [inputText, setInputText] = useState("");

  const textChangeHandler = (e) => {
    const text = e.target.value;
    if (text.trim().length > 5) {
      setInputText(text);
    }
  };

  const onClickHandler = () => {
    props.onChange(inputText);
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
          <h3>GPT Prompt Generator</h3>
          <p>
            Bitte geben Sie Ihren Text in das Feld ein. Wählen Sie in der Leiste
            oben Länge und Temperatur des gewünschten Outputs. Ein Klick auf den
            Button kopiert den Prompt anschließend direkt in die Zwischenablage.
          </p>
          <p>Mit Ctrl + V können Sie ihn dann in ChatGPT einfügen.</p>
          <Button
            color="#a1104a"
            text="Prompt generieren"
            onClick={onClickHandler}
          />

          <p
            className={[
              styles.confirmationText,
              props.confirmed ? styles.visible : "",
            ].join(" ")}
          >
            Prompt in Zwischenablage kopiert!
          </p>
        </Card>
      </div>
    </div>
  );
}
