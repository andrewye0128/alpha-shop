import React from "react";
import styles from "./Step2.module.css";

// step2
export default function Step2() {
  return (
    <section className={styles.form_container_two}>
      <form className={styles.form}>
        <h3 className={styles.form_title}>運送方式</h3>
        <section className={styles.form_body}>

          {/* form row 1 */}
          <label className={styles.radio_group} data-price="0">

            {/* <div className={styles.radio_group}> */}
            <input id="shipping-standard" type="radio" name="shipping" checked />
            <span className={styles.checkmark}></span>
            <div className={styles.radio_info}>
              <div className={styles.radio_info_container}>
                <div className={styles.text}>標準運送</div>
                <div className={styles.price}>免費</div>
              </div>
              <div className={styles.period}>約 3~7 個工作天</div>
            </div>
            <div className={styles.radio_box_border}></div>
            {/* </div> */}

          </label>

          {/* form row 2 */}
          <label className={styles.radio_group} data-price="500">

            {/* <div className={styles.radio_group}> */}
            <input id="shipping-dhl" type="radio" name="shipping" />
            <span className={styles.checkmark}></span>
            <div className={styles.radio_info}>
              <div className={styles.radio_info_container}>
                <div className={styles.text}>DHL 貨運</div>
                <div className={styles.price}>500</div>
              </div>
              <div className={styles.period}>48 小時內送達</div>
            </div>
            <div className={styles.radio_box_border}></div>
            {/* </div> */}
          </label>


        </section>
      </form>
    </section>
  )
}