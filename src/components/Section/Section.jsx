import React from "react";
import styles from "./Section.module.css";

export default function Section({ children }) {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Please leave feedback</h1>
      {children}
    </div>
  );
}
