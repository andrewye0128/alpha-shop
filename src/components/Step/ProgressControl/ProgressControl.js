import React from 'react'
import styles from "./ProgressControl.module.css";

import { ReactComponent as LeftArrow } from "../../../icons/left-arrow.svg"



export default function ProgressControl() {
  return (
    <div className={styles.progress_control_container}>
      <section className={styles.button_group} data-phase="credit-card">
        <button className={styles.arrow_group}>
          <LeftArrow className={styles.arrow} />
          上一步
          </button>
        <button className={styles.pink_one}>
          確認下單
        </button>
      </section>
    </div>
  )
}

