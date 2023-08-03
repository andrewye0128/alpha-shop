import React from 'react'
import Step1 from './Step1/Step1'
import Step2 from './Step2/Step2'
import Step3 from './Step3/Step3'
import styles from "./AllStep.module.css";


export default function AllStep({stepPhase}) {
  return (
    <>
      <section className={styles.all_step_conatainer}>
        {stepPhase === 1 && <Step1 />}
        {stepPhase === 2 && <Step2 />}
        {stepPhase === 3 && <Step3/>}
      </section>
    </>
  )
}
