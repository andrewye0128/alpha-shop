
// import React, { Component } from 'react'
import Step1 from "./Step1/Step1"
import Step2 from "./Step2/Step2"
import Step3 from "./Step3/Step3"
import StepProgress from "./StepProgress/StepProgress"
import ProgressControl from "./ProgressControl/ProgressControl"
import styles from "./Step.module.css";



function Step() {
    return (
      <div className={styles.step_container}>
        <StepProgress />
        <Step1 />
        {/* <Step2 /> */}
        {/* <Step3 /> */}
        <ProgressControl />
      </div>
    )
  }

export default Step
