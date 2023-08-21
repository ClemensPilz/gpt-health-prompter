import Card from "./util/Card";
import RangeInput from "./util/RangeInput";
import styles from "./TopBar.module.css";

export default function TopBar(props) {
  const lengthChangeHandler = (e) => {
    props.onChange({ length: e.target.value });
  };

  const temperatureChangeHandler = (e) => {
    props.onChange({ temperature: e.target.value });
  };

  return (
    <div>
      <Card className={styles.inputCard}>
        <RangeInput
          label={"Länge"}
          min={50}
          max={100}
          step={10}
          value={props.inputLength}
          onChange={lengthChangeHandler}
        />
        <RangeInput
          label={"Temperatur"}
          min={50}
          max={100}
          step={10}
          value={props.inputTemperature}
          onChange={temperatureChangeHandler}
        />
      </Card>
    </div>
  );
}
