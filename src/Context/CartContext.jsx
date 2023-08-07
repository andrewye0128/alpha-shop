import { createContext, useState, useContext } from "react";
import { ShippnigContext } from "./ShippingContext.jsx";
import initialCart from "../components/Main/Cart/CartData.js"


export const CartContext = createContext()

export function CartContextProvider( { children } ) {

  const [cartItem, setCartItem] = useState(initialCart)
  const { shipping } = useContext(ShippnigContext)

  //計算總金額
  let totalPrice = cartItem.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price
  }, 0)

  totalPrice += shipping



  //從兩個變為一個 => 宣告按鍵函式
  function handleCartClick(id , newQun) {
    const newCartItem = cartItem.map(item => {
       if(item.id === id) {
         if (newQun === 1 || newQun === -1 && item.quantity > 0) {
           return {
             ...item,
             quantity: item.quantity + newQun
           }
         }
         return item
       } else {
         return item
       }
    })
    setCartItem(newCartItem)
  }

  //Provider
  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        totalPrice,
        handleCartClick,
      }}
    >
      {children}
    </CartContext.Provider> 
  )

}
