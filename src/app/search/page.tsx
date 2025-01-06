import { ReactElement } from "react";
import styles from './page.module.css';

const items = Array(105)
.fill(null)
.map((_,i)=>i+1);

export default function page(): ReactElement {
    return (
      <div className={styles.page}>
      <div className={styles.filters}>فیلتر زوج یا فرد
      <button className={styles.btn}>زوج</button>
      <button className={styles.btn}>فرد</button>

      </div>
      <ul className={styles.results}>
      {items.map((item)=>(
        <li key={item} className={item % 2 === 0 ? styles.active : ''}>{item}</li>
      ))}
      </ul>
      </div>
)}  