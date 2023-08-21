import Card from "./util/Card";
import styles from "./CardBar.module.css";
import Button from "./util/Button";

export default function CardBar() {
  return (
    <div className={styles.cardBar}>
      <div className={styles.card}>
        <Card>
          <p>Hello Card1</p>
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
          <Button color="#a1104a" text="Prompt kopieren" />
        </Card>
      </div>
    </div>
  );
}
