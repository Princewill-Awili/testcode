import React, { useState, createContext } from 'react';

export const stateContext = createContext();


export const StateContextProvider = ({children}) => {
  
  const [showBanner, updateShowBanner] = useState(true);

  return (
    <stateContext.Provider value = {{showBanner, updateShowBanner}}>
        {children}
    </stateContext.Provider>
  )
}