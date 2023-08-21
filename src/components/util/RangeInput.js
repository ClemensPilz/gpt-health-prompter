import styles from "./RangeInput.module.css";
export default function RangeInput(props) {
  const labelLowercase = props.label.toLowerCase();

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={labelLowercase}>{props.label}:</label>
      <input
        type="range"
        min={props.min}
        max={props.max}
        id={labelLowercase}
        step={props.step}
        value={props.value}
        onChange={props.onChange}
      />
      <span>{props.value}%</span>
    </div>
  );
}
