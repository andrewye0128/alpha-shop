import React from 'react'
import { useState } from 'react';
import styles from "./Cart.module.css";
import { ReactComponent as MinusButton } from '../../icons/minus.svg';
import { ReactComponent as PlusButton } from '../../icons/plus.svg';

const productItems = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]


function Product({ id, img, name, price, totalMius, totalPlus }) {
    const [quantity, setQuantity] = useState(0)

    function handleMiusClick() {
      if (quantity > 0 ) {
        setQuantity(quantity - 1)
        totalMius(price)
      }
    }

    function handlePlusClick() {
      setQuantity( quantity + 1 )
      totalPlus(price)
    }

    return (
      <div className={styles.product_container} key={id} data-price={price}>
        <img className={styles.img_container} src={img} />
        <div className={styles.product_info}>
          <div class={styles.product_name}>{name}</div>
          <div class={styles.product_control_container}>
            <div class={styles.product_control}>
            <MinusButton 
              className={styles.product_icon}
              onClick={handleMiusClick}
            />
            <span class={styles.product_count}>{quantity}</span>
            <PlusButton 
              className={styles.product_icon}
              onClick={handlePlusClick}
            />
            </div>
          </div>
        </div>
        <div className={styles.price}>${price * quantity}</div>
      </div>
    )
}

export default function Cart() {
  const [total, setTotal] = useState(0)

  function totalMius(price) {
    setTotal( total - price )
  }

  function totalPlus(price) {
    setTotal( total + price)
  }

  return (
    <>
      <section className={styles.cart_container}>
        <h3 className={styles.cart_title}>購物籃</h3>

        <section className={styles.product_list} data-total-price="0">
          {productItems.map((item) => (
            <Product 
              key={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
              quantity={item.quantity}
              totalMius={totalMius}
              totalPlus={totalPlus}
            />
          ))}
            
        </section>


        <section class={styles.cart_info}>
          <div className={styles.text}>運費</div>
          <div className={styles.price}>免費</div>
        </section>
        <section className={styles.cart_info}>
          <div className={styles.text}>小計</div>
          <div className={styles.price}>${total}</div>
        </section >

      </section >
    </>
    
  )
}