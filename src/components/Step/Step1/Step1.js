import React from "react";
import styles from "./Step1.module.css";



// step1 
export default function Step1() {
  return (
    <section className={styles.form_container_one}>
      <form className={styles.form}>
        <h3 className={styles.form_title}>寄送地址</h3>
        <section className={styles.form_body}>

          {/* form row 1 */}
          <div className={styles.form_row}>

            <div className={styles.title_group}>
              <div className={styles.input_label}>稱謂</div>
              <div className={styles.selcet_container}>
                <select className={styles.option_box}>
                  <option value="mr" selected>先生</option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
            </div>


            <div className={styles.name_group}>
              <div className={styles.input_label}>姓名</div>
              <input className={styles.input_box} type="text" placeholder="請輸入姓名" />
            </div>
          </div>

          {/* form row 2 */}
          <div className={styles.form_row}>
            <div className={styles.phone_group}>
              <div className={styles.input_label}>電話</div>
              <input className={styles.input_box} type="text" placeholder="請輸入行動電話" />
            </div>

            <div className={styles.email_group}>
              <div className={styles.input_label}>姓名</div>
              <input className={styles.input_box} type="text" placeholder="請輸入Email" />
            </div>
          </div>

          {/* form row 3 */}
          <div className={styles.form_row}>
            <div className={styles.city_group}>
              <div className={styles.input_label}>縣市</div>
              <div className={styles.selcet_container}>
                <select required className={styles.option_box}>
                  <option value="">請選擇縣市</option>
                  <option value="KLU">基隆市</option>
                  <option value="TPH">新北市</option>
                  <option value="TPE">臺北市</option>
                  <option value="TYC">桃園市</option>
                  <option value="HSH">新竹縣</option>
                  <option value="HSC">新竹市</option>
                  <option value="MAC">苗栗市</option>
                  <option value="MAL">苗栗縣</option>
                  <option value="TXG">臺中市</option>
                  <option value="CWH">彰化縣</option>
                  <option value="CWS">彰化市</option>
                  <option value="NTC">南投市</option>
                  <option value="NTO">南投縣</option>
                  <option value="YLH">雲林縣</option>
                  <option value="CHY">嘉義縣</option>
                  <option value="CYI">嘉義市</option>
                  <option value="TNN">臺南市</option>
                  <option value="KHH">高雄市</option>
                  <option value="IUH">屏東縣</option>
                  <option value="PTS">屏東市</option>
                  <option value="ILN">宜蘭縣</option>
                  <option value="ILC">宜蘭市</option>
                  <option value="HWA">花蓮縣</option>
                  <option value="HWC">花蓮市</option>
                  <option value="TTC">臺東市</option>
                  <option value="TTT">臺東縣</option>
                  <option value="PEH">澎湖縣</option>
                  <option value="KMN">金門縣</option>
                  <option value="LNN">連江縣</option>
                </select>
              </div>
            </div>

            <div className={styles.address_group}>
              <div className={styles.input_label}>地址</div>
              <input className={styles.input_box} type="text" placeholder="請輸入地址" />
            </div>
          </div>


        </section>
      </form>
    </section>

  )
}