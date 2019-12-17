import React from "react";
import styles from "./styles.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <span>© Copyright 2019, Julien Bongars</span>
      <img src="/images/logo.png" alt="logo" height="100px" />
    </div>
  );
}
