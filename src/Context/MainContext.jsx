import React, { useState } from 'react';
import { createContext } from 'react';

export let cartContext = createContext();

function MainContext({children}) {

    const [cart,setcart] = useState([]);
    const [wishlist,setwishlis] = useState([]);


  return (
    <cartContext.Provider value={{cart,setcart}}>
        {children}
    </cartContext.Provider>
  )
}

export default MainContext
