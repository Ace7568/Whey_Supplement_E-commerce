import React, { useContext, useState } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { IoIosClose } from "react-icons/io";
import './CartItems.css'


const CartItems = () => {

  const {cartItems,removeFromCart,getTotalCost} = useContext(ShopContext)

  const cart = [];
  const [subtotal,setsubtotal] = useState(0);

  const getSimilarItemsLength = (category) => {
    const similarItems = cartItems.filter(item => item.id === category);
    // console.log(similarItems)
    return similarItems.length;
  };

  const getSimilarItemsLengthCart = (category) => {
    const similarItems = cart.filter(item => item.id === category);
    // console.log(similarItems)
    return similarItems.length;
  };

  return (
    <div className='cartItems'>

      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {cartItems.map((items)=>{
        if(getSimilarItemsLengthCart(items.id)>0) return null;
        cart.push(items);
        return(
            <>
            <div className="cartitems-format cartitems-format-main">
                <img src={items.image} alt="prod. img" className='carticon-product-icon'/>
                <p>{items.name}</p>
                <p>{items.new_price}</p>
                <button className='cartitems-quantity'>{getSimilarItemsLength(items.id)}</button>
                <p>{items.new_price * getSimilarItemsLength(items.id)}</p>
                
                <IoIosClose onClick={()=>removeFromCart(items.id)} className='remove-from-cart'/>
                
            </div>
            <hr />
            </>
        )
      })}

      <div className="cart-total">

        <h2>Cart Total</h2>
        <div className="subtotal">
          <p>subtotal</p>
          <p>{getTotalCost()}</p>
        </div>

        <div className="subtotal">
          <p>Shipping Fee</p>
          <p>Free</p>
        </div>

        <div className="subtotal">
          <p><b>Total</b></p>
          <p>0</p>
        </div>

        <button className="proceed">
          Proceed To Checkout
        </button>
      </div>
    </div>
  )
}

export default CartItems
