import React from 'react'
import data_product from '../Assets/all_product'
import Items from '../Items/Items'
import './Popular.css'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR PRODUCTS</h1>
      <hr />
      <hr />
      <div className="popular_items">
        {data_product.map((items, i)=>{
          return <Items key={i} id = {items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
