import { ReactElement } from "react";
import styles from './page.module.css';

export default function page(): ReactElement {
    return (
      <div className={styles.page}>
      <div className={styles.filters}></div>
      <div className={styles.results}></div>
      </div>
)}  