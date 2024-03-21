import React from 'react'
import Items from '../Items/Items'
import data_product from '../Assets/all_product'
import './ItemsCard.css'

const ItemsCard = () => {
  return (
    <div className='itemscard'>
      <h2>PEANUT BUTTER

        <button>See All</button>
      </h2>
    
      <div className="peanut_items">
        {data_product.map((items, i)=>{
          return <Items key={i} id = {items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
        })}
    </div>
    </div>
  )
}

export default ItemsCard
