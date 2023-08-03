
// import React, { Component } from 'react'
import { useState } from "react"
import StepProgress from "./StepProgress/StepProgress"
import ProgressControl from "./ProgressControl/ProgressControl"
import styles from "./Step.module.css";
import AllStep from "./AllStep/AllStep"



function Step() {
    const [stepPhase, setStepPhase] = useState(1)

    // 方式一
    // function handleNext() {
    //   if (stepPhase < 3) {
    //     setStepPhase(stepPhase + 1)
    //   }
    // }

    // function handlePre() {
    //   if (stepPhase > 1) {
    //     setStepPhase(stepPhase - 1)
    //   }
    // }

   // 方式二，可以，但會有問題
  // function onClickStep (event) {
  //     let target = event.target
   
  //     if (target.className.includes("next_button") && stepPhase < 3) {
  //       setStepPhase(stepPhase + 1)

  //     } else if (target.className.includes("prev_button") && stepPhase > 1) {
  //       setStepPhase(stepPhase - 1)
  //     }
    
  //   }

  const onClickStep = (nowStep) => {
    // 如果step 大於3 或小於1 就停止
    if (stepPhase + nowStep > 3 || stepPhase + nowStep < 1) return

    setStepPhase((prev) => prev + nowStep)

  }



    // return (
    //   <div className={styles.step_container}>
    //     <StepProgress stepPhase={stepPhase} />
    //     < AllStep stepPhase={stepPhase}  />
    //     <ProgressControl 
    //       stepPhase={stepPhase} 
    //       onClickStep={onClickStep}
    //     />
    //   </div>
    // )
    return (
      <div className={styles.step_container}>
        <StepProgress stepPhase={stepPhase} />
        < AllStep stepPhase={stepPhase}  />
        <ProgressControl 
          stepPhase={stepPhase} 
          clickStep={onClickStep}
        />
      </div>
    )
  }

export default Step
