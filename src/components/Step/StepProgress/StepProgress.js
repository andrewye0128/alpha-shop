import React from "react";
import styles from "./StepProgress.module.css";
import { ReactComponent as CheckIcon } from "../../../icons/pg-complete.svg";



export default function StepProgress() {
  return (
    <section className={styles.register_container} data-phase="1" data-total-price="0">
      <h2 className={styles.register_title}>結帳</h2>
      <section className={styles.progress_container}>

        {/* step 1 */}
        <span className={styles.progress_group} data-phase="address">
          <span className={styles.progress_icon}>

            <CheckIcon className={styles.active_icon}/>
            {/* <span className={styles.text}>1</span> */}
          </span>
          <span className={styles.progress_label_done}>寄送地址</span>
        </span>
        <span className={styles.active_progress_bar} data_order="1"></span>

        {/* step 2 */}
        <span class={styles.progress_group} data_phase="shipping">
          <span className={styles.progress_icon_done}>
            <span className={styles.text}>2</span>
          </span>
          <span className={styles.progress_label_done}>運送方式</span>
        </span>
        <span className={styles.progress_bar} data-order="2"></span>

        {/* step 3 */}
        <span className={styles.progress_group} data-phase="credit-card">
          <span className={styles.progress_icon_undone}>
            <span className={styles.text_undone}>3</span>
          </span>
          <span className={styles.progress_label_undone}>付款資訊</span>
        </span>

      </section>
    </section>
  )
}