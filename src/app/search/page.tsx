"use client";
import { ReactElement, useState } from "react";
import styles from "./page.module.css";

const items = Array(105)
  .fill(null)
  .map((_, i) => i + 1);

export default function page(): ReactElement {
  const [odd, setOdd] = useState(false);
  const [even, setEven] = useState(false);
  const changeodd = () => {
    setOdd((odd) => !odd);
    console.log("odd=", odd);
  };
  const changeeven = () => {
    setEven((even) => !even);
    console.log("even=", even);
  };

  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        فیلتر زوج یا فرد
        <button
          className={even ? styles.btnactive : styles.btn}
          onClick={() => changeeven()}
        >
          زوج
        </button>
        <button
          className={odd ? styles.btnactive : styles.btn}
          onClick={() => changeodd()}
        >
          فرد
        </button>
      </div>
      <ul className={styles.results}>
        {items.map((item) => (
          //        <li key={item} className={(odd&&(item % 2 !== 0)) ? styles.active : ''}>{item}</li>
          <li
            key={item}
            className={
              (odd && item % 2 !== 0) || (even && item % 2 === 0)
                ? styles.active
                : ""
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
