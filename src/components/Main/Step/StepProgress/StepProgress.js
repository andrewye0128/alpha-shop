import React from "react";
import styles from "./StepProgress.module.css";
import { ReactComponent as CheckIcon } from "../../../../icons/pg-complete.svg";


function StepCircle({ stepPhase, stepNum, label, dataPhase }) {
  return (
    <span className={styles.progress_group} data-phase={dataPhase}>
      <span className={stepPhase >= stepNum ? styles.progress_icon_done : styles.progress_icon_undone}>
        <span className={stepPhase >= stepNum ? styles.text : styles.text_undone}>{stepPhase > stepNum ? <CheckIcon className={styles.active_icon} /> : stepNum}</span>
      </span>
      <span className={stepPhase >= stepNum ? styles.progress_label_done : styles.progress_label_undone}>{label}</span>
    </span>
  )
}

function ProgressBar({className}) {
  return (
    <span className={className}></span>
  )
}


export default function StepProgress({ stepPhase }) {
  return (
    <section className={styles.register_container} data-phase="1" data-total-price="0">
      <h2 className={styles.register_title}>結帳</h2>
       <div className={styles.progress_container}>
        
        {/* step 1 */}
        <StepCircle stepPhase={stepPhase} stepNum={1} label="寄送地址" dataPhase="address"  />
        <ProgressBar className={stepPhase > 1 ? styles.active_progress_bar : styles.progress_bar}/>

        {/* step 2 */}
        <StepCircle stepPhase={stepPhase} stepNum={2} label="運送方式" dataPhase="shipping" />
        <ProgressBar className={stepPhase > 2 ? styles.active_progress_bar : styles.progress_bar} />

        {/* step 3 */}
        <StepCircle stepPhase={stepPhase} stepNum={3} label="付款資訊" dataPhase="credit-card" />
       </div>
    </section>
  )
}

 {/* export default function StepProgress() { */}
   {/* return (
    <section className={styles.register_container} data-phase="1" data-total-price="0">
       <h2 className={styles.register_title}>結帳</h2>
      <section className={styles.progress_container}> */}

        {/* step 1 */}
        {/* <span className={styles.progress_group} data-phase="address">
          <span className={styles.progress_icon}>

            <CheckIcon className={styles.active_icon}/>
            {/* <span className={styles.text}>1</span> */}
          {/* </span>
          <span className={styles.progress_label_done}>寄送地址</span>
        </span>
        <span className={styles.active_progress_bar} data_order="1"></span> */}

        {/* step 2 */}
        {/* <span class={styles.progress_group} data_phase="shipping">
          <span className={styles.progress_icon_done}>
            <span className={styles.text}>2</span>
          </span>
          <span className={styles.progress_label_done}>運送方式</span>
        </span>
        <span className={styles.progress_bar} data-order="2"></span> */}

        {/* step 3 */}
        {/* <span className={styles.progress_group} data-phase="credit-card">
          <span className={styles.progress_icon_undone}>
            <span className={styles.text_undone}>3</span>
          </span>
          <span className={styles.progress_label_undone}>付款資訊</span>
        </span>

      </section>
    </section>
  )
} */}