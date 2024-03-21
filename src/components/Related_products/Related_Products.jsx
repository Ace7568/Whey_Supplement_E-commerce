import React from 'react'
import all_product from '../Assets/all_product'
import Items from '../Items/Items'
import './Related_Products.css'

const Related_Products = () => {
  return (
    <>
    <h1 className="related">Related Products</h1>
    <div className='related-products'>
      {all_product.map((item,key)=>{
        if(item.Category === "Whey Protien"){
            return <Items key={key} id = {item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
      })}
    </div>
    </>
  )
}

export default Related_Products
