import { createContext, useState } from "react";

export const ShippnigContext = createContext()

export function ShippnigContextProvider({ children }) {
  const [shipping, setShipping] = useState(0)

  return (
    <ShippnigContext.Provider 
      value={{
        shipping,
        setShipping,
      }}
    >
      {children}
    </ShippnigContext.Provider>
  )
}