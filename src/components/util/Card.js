import styles from "./Card.module.css";

import React from "react";

export default function Card(props) {
  const classes = [props.className, styles.card];

  return <div className={classes.join(" ")}>{props.children}</div>;
}
