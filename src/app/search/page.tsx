import { ReactElement } from "react";
import styles from './page.module.css';

const items = Array(105)
.fill(null)
.map((_,i)=>i+1);

export default function page(): ReactElement {
    return (
      <div className={styles.page}>
      <div className={styles.filters}>filter</div>
      <ul className={styles.results}>
      {items.map((item)=>(
        <li key={item}>{item}</li>
      ))}
      </ul>
      </div>
)}  