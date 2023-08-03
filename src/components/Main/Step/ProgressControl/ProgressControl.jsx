import React from 'react'
import styles from "./ProgressControl.module.css";
import { ReactComponent as LeftArrow } from "../../../../icons/left-arrow.svg"
import { ReactComponent as RightArrow } from "../../../../icons/right-arrow.svg"



// function ButtonOne({onClickStep}) {
//   return (
//     <section className={styles.button_group_one}>
//       <button onClick={onClickStep} className={styles.arrow_group}>
//         下一步
//         <RightArrow className={styles.arrow} />
//       </button>
//     </section>
//   )
// }

// function ButtonTwo({onClickStep}) {
//   return (
//     <section className={styles.button_group}>
//       <button onClick={onClickStep} className={styles.arrow_group}>
//         上一步
//         <LeftArrow className={styles.arrow} />
//       </button>
//       <button onClick={onClickStep} className={styles.arrow_group}>
//          下一步
//         <RightArrow className={styles.arrow} />
//       </button>
//     </section>
//   )
// }

// function ButtonThree({onClickStep}) {
//   return (
//     <section className={styles.button_group}>
//       <button onClick={onClickStep} className={styles.arrow_group}>
//         上一步
//         <LeftArrow className={styles.arrow} />
//       </button>
//       <button className={styles.arrow_group}>
//          確定下單
//       </button>
//     </section>
//   )
// }

// export default function ProgressControl({ stepPhase, onClickStep }) {
//   return (
//     <div className={styles.progress_control_container}>
//       {stepPhase === 1 && <ButtonOne onClickStep={onClickStep}/>}
//       {stepPhase === 2 && <ButtonTwo onClickStep={onClickStep} />}
//       {stepPhase === 3 && <ButtonThree onClickStep={onClickStep} />}
//     </div>
//   )
// }


function PrevBtn({ clickStep }) {
  return (
    <button 
      className={styles.prev_button}
      onClick={clickStep}
      >
      <LeftArrow className={styles.arrow_left} />
      上一步
    </button>
  )
}

function NextBtn({ clickStep } ) {
  return (
    <button 
      className={styles.next_button}
      onClick={clickStep}
      >
      下一步
      <RightArrow className={styles.arrow_right} />
    </button>
  )
}
function ButtonOne({ clickStep }) {
  return (
    <section className={styles.button_group_one}>
      <NextBtn clickStep={() => clickStep(1)}/>
    </section>
  )
}

function ButtonTwo({ clickStep }) {
  return (
    <section className={styles.button_group_one}>
      <PrevBtn clickStep={() => clickStep(-1)} />

      <NextBtn clickStep={() => clickStep(1)}  />
    </section>
  )
}

function ButtonThree({ clickStep }) {
  return (
    <section className={styles.button_group_one}>
      <PrevBtn clickStep={() => clickStep(-1)} />

      <button className={styles.arrow_group}>
        確定下單
       </button>

    </section>
  )
}


// // 測試二

// function ButtonOne({ clickStep }) {
//   return (
//     <section className={styles.button_group_one}>
//       <button 
//         onClick={() => clickStep(1)} 
//         className={styles.next_button }
//         >

//         下一步
//         <RightArrow className={styles.arrow_right} />
//       </button>
//     </section>
//   )
// }

// function ButtonTwo({ clickStep }) {
//   return (
//     <section className={styles.button_group}>
//       <button 
//         onClick={() => clickStep(-1)} 
//         className={styles.prev_button}
//         >

//         <LeftArrow className={styles.arrow_left} />
//         上一步
//       </button>
//       <button 
//         onClick={() => clickStep(1)} 
//         className={styles.next_button}
//         >

//         下一步
//         <RightArrow className={styles.arrow_right} />
//       </button>
//     </section>
//   )
// }

// function ButtonThree({ clickStep }) {
//   return (
//     <section className={styles.button_group}>
//       <button 
//         onClick={() => clickStep(-1)} 
//         className={styles.prev_button} 
//         >

//         <LeftArrow className={styles.arrow_left} />
//         上一步
//       </button>
//       <button className={styles.arrow_group}>
//         確定下單
//       </button>
//     </section>
//   )
// }

export default function ProgressControl({ stepPhase, clickStep }) {
  return (
    <div className={styles.progress_control_container}>
      {stepPhase === 1 && <ButtonOne clickStep={clickStep} />}
      {stepPhase === 2 && <ButtonTwo clickStep={clickStep} />}
      {stepPhase === 3 && <ButtonThree clickStep={clickStep} />}
    </div>
  )
}





// export default function ProgressControl({ stepPhase, onNext, onPre }) {

//   return (
//     <div className={styles.progress_control_container}>
//       <section className={styles.button_group} data-phase="credit-card">
//         <button 
//          className={styles.arrow_group}

//         >
//           <LeftArrow className={styles.arrow} />
//           上一步
//         </button>
//         <button className={styles.pink_one}>
//           確認下單
//         </button>
//       </section>
//     </div>
//   )
// }

