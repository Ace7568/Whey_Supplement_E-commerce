import React, { createContext, useState } from 'react'
import all_product from '../Assets/all_product'

export const ShopContext = createContext();

const getDeafaultCart = () => {
    let cart = {};

    for(let i=0; i<all_product.length; i++){
        cart[i] = 0;
    }
    
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems,setcartItems] = useState([]);

    // console.log(cartItems)

    const addToCart = (product) => {
        // setcartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
        setcartItems([...cartItems,product])
        // console.log(cartItems)
    }

    

    const removeFromCart = (ItemId) => {
        setcartItems(prevItems => prevItems.filter(item => item.id !== ItemId));
    }

    const getTotalCost = () => {
        let cost = 0;
        for(let i = 0; i<cartItems.length;i++){
            cost = cost + cartItems[i].new_price;
        }
        return cost;
    }

    const getTotalCartItems = () => {
        return cartItems.length;    
    }


    const contextvalue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartItems,getTotalCost};

  return (
    <ShopContext.Provider value={contextvalue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
