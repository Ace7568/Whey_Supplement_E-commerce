import React, { useContext, useState } from 'react'
import BreadCrums from '../BreadCrums/BreadCrums'
import all_product from '../Assets/all_product'
import { useParams } from 'react-router-dom'
import './Products.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import {BiRupee} from 'react-icons/bi'
import Review from '../Review/Review'
import Related_Products from '../Related_products/Related_Products'
import { ShopContext } from '../ShopContext/ShopContext'

const Products = (props) => {

    const {productId} = useParams();
    // console.log("RAM");

    const product = all_product.find((e)=> e.id === Number(productId))

    const [selected_weight,setweight] = useState("");

    const {addToCart} = useContext(ShopContext);

  return (
    <div className='product-screen'>
      <BreadCrums product={product}/>
      <div className="product-section">
        <div className="product-section-left">
          <div className="small-images">
            <img src={product.show_image1} alt="" />
            <img src={product.show_image1} alt="" />
            <img src={product.show_image1} alt="" />
            <img src={product.show_image1} alt="" />
          </div>
          <img src={product.image} alt="" />
        </div>
        <div className="product-section-right">
          <h1>{product.name}</h1>
          <div className="star_icon">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
          </div>
          <div className="price">
            <h6 className='old-price'><BiRupee/>{product.old_price}</h6>
            <h6 className='new-price'><BiRupee/>{product.new_price}</h6>
          </div>
          <div className="product-disc">
            <p>{product.discription}</p>
          </div>
          <h6>Weight : {selected_weight}</h6>

          <div className="weights">
            {product.weight.map((w,key)=>{
              return(
                <div className="individual-weight" key={key} onClick={()=>setweight(w)}>{w}</div>
              )
            })}
          </div>
          
          <button onClick={()=>{addToCart(product)}}>ADD TO CART</button>
        </div>
      </div>
      <Review/>
      <Related_Products/>
    </div>
  )
}

export default Products
