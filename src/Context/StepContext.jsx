import { createContext, useState } from 'react'

// 宣告儲存使用者資料
const userInfo = {
  userName: "",
  carNum: "",
  cardDate: "",
  cardCvc: "",
}

export const StepContext = createContext()

export default function StepContextProvider({ children }) {
  const [info, setInfo] = useState(userInfo)
  
  function storeInput(e) {

  //確認是否接收到input的值
    // console.log(e.target.value)
    setInfo({ ...info, [e.target.name]: `${e.target.value}` })
  }

  function confirmSubmit() {
    console.log(info)
    alert("已確認下單，請console.log 確認內容")
  }

  return (
    <StepContext.Provider
      value={{
        info,
        setInfo,
        storeInput,
        confirmSubmit,
      }}
    >
      {children}
    </StepContext.Provider>
  )
}