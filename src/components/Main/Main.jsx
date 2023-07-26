import React from "react";
import Step from "./Step/Step";
import Cart from './Cart/Cart'
import styles from "./Main.module.css";

export default function Main()  {
  
    return (
       <>
          <main className={styles.main_wrapper}>
            <div className={styles.main_container}>
              <Step />
              <Cart />
            </div>
          </main>

       </>
        
    )
  
}
