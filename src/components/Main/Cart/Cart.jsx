import React from 'react'
import { useContext } from 'react';
import { CartContext }  from '../../../Context/CartContext';
import styles from "./Cart.module.css";
import { ReactComponent as MinusButton } from '../../../icons/minus.svg';
import { ReactComponent as PlusButton } from '../../../icons/plus.svg';


function Product() {
    // const [quantity, setQuantity] = useState(0)
  const { cartItem, handleCartClick } = useContext(CartContext)
    


       const allItem = cartItem.map((item) => (
        <div className={styles.product_container} key={item.id}>
          <img className={styles.img_container} src={item.img} />
          <div className={styles.product_info}>
            <div className={styles.product_name}>{item.name}</div>
            <div className={styles.product_control_container}>
              <div className={styles.product_control}>
                <MinusButton
                  className={styles.product_icon}
                  onClick={() => handleCartClick(item.id, -1)}
                />
                <span className={styles.product_count}>{item.quantity}</span>
                <PlusButton
                  className={styles.product_icon}
                   onClick={() => handleCartClick(item.id, 1)}
                />
              </div>
            </div>
          </div>
          <div className={styles.price}>${item.price * item.quantity}</div>
        </div>
      ))

  return allItem
}

export default function Cart() {
  const { totalPrice  } = useContext(CartContext )



  return (
    <>
      <section className={styles.cart_container}>
        <h3 className={styles.cart_title}>購物籃</h3>

        <section className={styles.product_list} data-total-price="0">
          < Product />
        </section>


        <section className={styles.cart_info}>
          <div className={styles.text}>運費</div>
          <div className={styles.price}>免費</div>
        </section>
        <section className={styles.cart_info}>
          <div className={styles.text}>小計</div>
          <div className={styles.price}>${totalPrice}</div>
        </section >

      </section >
    </>
    
  )
}