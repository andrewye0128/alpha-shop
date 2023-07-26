import React from "react";
import styles from "./Step3.module.css";


export default function Step3() {
  
    return (
      <section className={styles.form_container_three}>
        <form className={styles.form}>
          <h3 className={styles.form_title}>付款資訊</h3>
          <section className={styles.form_body}>

            {/* form row 1 */}
            <div className={styles.form_row_one}>

              <div className={styles.input_group}>
                <div className={styles.input_label}>持卡人姓名</div>
                <input className={styles.input_box} type="text" placeholder="John Doe" />
              </div>
            </div>

            {/* form row 2 */}
            <div className={styles.form_row_one}>
              <div className={styles.input_group}>
                <div className={styles.input_label}>卡號</div>
                <input className={styles.input_box} type="text" placeholder="1111 2222 3333 4444" />
              </div>
            </div>


            {/* form row 3 */}
            <div className={styles.form_row_two}>
              <div className={styles.input_group}>
                <div className={styles.input_label}>有效期限</div>
                <input className={styles.input_box} type="text" placeholder="MM/YY" />
              </div>

              <div className={styles.input_group}>
                <div className={styles.input_label}>CVC / CCV</div>
                <input className={styles.input_box} type="text" placeholder="123" />
              </div>
            </div>


          </section>
        </form>
      </section>
    )
  }
