import React from 'react'
import { useState } from 'react';
import styles from "./Cart.module.css";
import { ReactComponent as MinusButton } from '../../../icons/minus.svg';
import { ReactComponent as PlusButton } from '../../../icons/plus.svg';

const initialCart = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 0,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 0,
  },
]


function Product({ id, img, name, price, quantity , handleMiusClick, handlePlusClick }) {
    // const [quantity, setQuantity] = useState(0)

    

    return (
      <div className={styles.product_container} key={id} data-price={price}>
        <img className={styles.img_container} src={img} />
        <div className={styles.product_info}>
          <div className={styles.product_name}>{name}</div>
          <div className={styles.product_control_container}>
            <div className={styles.product_control}>
            <MinusButton 
              className={styles.product_icon}
              onClick={()=> handleMiusClick(id, -1, price)}
            />
            <span className={styles.product_count}>{quantity}</span>
            <PlusButton 
              className={styles.product_icon}
                onClick={() => handlePlusClick(id, 1, price)}
            />
            </div>
          </div>
        </div>
        <div className={styles.price}>${price * quantity}</div>
      </div>
    )
}

export default function Cart() {
  const [cartItem, setCartItem] = useState(initialCart)
  const [total, setTotal] = useState(0)



  function totalMius(price) {
    if(total > 0) {
      setTotal(total - price)
    }
  }

  function totalPlus(price) {
    setTotal( total + price)
  }

  function handlePlusClick(id, nowNum, price ) {
    const newCartItem = cartItem.map(item => {
        if(item.id ===id ) {
          if (nowNum === 1 ){
            return {
              ...item,
              quantity: item.quantity + 1
            } 
          } 
          return item
        } else {
          return item
        }
    })
    setCartItem(newCartItem)
    totalPlus(price)
    console.log(price)
  }

  function handleMiusClick(id, nowNum, price) {
    const newCartItem = cartItem.map(item => {
      if (item.id === id) {
        if (nowNum === -1 && item.quantity > 0) {
          return {
            ...item,
            quantity: item.quantity - 1
          }
        } 
        return item
      } else {
        return item
      }
    })
    setCartItem(newCartItem)
    totalMius(price)
    console.log(price)
  }

  // function handleMiusClick() {
  //   if (quantity > 0) {
  //     setQuantity(quantity - 1)
  //     totalMius(price)
  //   }
  // }

  // function handlePlusClick() {
  //   setQuantity(quantity + 1)
  //   totalPlus(price)
  // }



  return (
    <>
      <section className={styles.cart_container}>
        <h3 className={styles.cart_title}>購物籃</h3>

        <section className={styles.product_list} data-total-price="0">
          {cartItem.map((item) => (
            <Product 
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
              quantity={item.quantity}
              handleMiusClick={handleMiusClick}
              handlePlusClick={handlePlusClick}

            />
          ))}
            
        </section>


        <section className={styles.cart_info}>
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