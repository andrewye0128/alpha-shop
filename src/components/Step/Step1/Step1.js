import React from "react";
import styles from "./Step1.module.css";
import setpOneData from "./Step1Data.js"

// 重複option值
function SelectOption({ label, datas }) {

  return (
    <>
      <div className={styles.input_label}>{label}</div>
        <div className={styles.selcet_container}>
        <select className={styles.option_box} required>
          {datas.map( data=> {
             return (
               <option key={data.value} value={data.value} selected>{data.name}</option>
             )
          })}
        </select>
      </div>
    </>
  )
}

// 重複的input值
function Input({label, text, placeholder}) {
  return (
    <>
      <div className={styles.input_label}>{label}</div>
      <input className={styles.input_box} type={text} placeholder={placeholder} />
    </>
  )
}

// step1 
export default function Step1() {
  return (
    <>
      <section className={styles.form_container_one}>
        <form className={styles.form}>
          <h3 className={styles.form_title}>寄送地址</h3>
          <section className={styles.form_body}>

            {/* form row 1 */}
            <div className={styles.form_row}>
              <div className={styles.title_group}>
                <SelectOption label="稱謂" datas={setpOneData.genders} />
              </div>

              <div className={styles.name_group}>
                <Input label="姓名" type="text" placeholder="請輸入姓名" />
              </div>
            </div>


            {/* form row 2 */}
            <div className={styles.form_row}>
              <div className={styles.phone_group}>
                <Input label="電話"  type="text" placeholder="請輸入行動電話" />
              </div>

              <div className={styles.email_group}>
                <Input label="E-mail" type="text" placeholder="請輸入E-mail" />
              </div>
            </div>

            {/* form row 3 */}
            <div className={styles.form_row}>
              <div className={styles.city_group}>
                <SelectOption label="縣市" datas={setpOneData.citys} />
              </div>

              <div className={styles.address_group}>
                <Input label="地址" type="text" placeholder="請輸入地址" />
              </div>
            </div>

          </section>
        </form>
      </section>
    </>
  )
}
