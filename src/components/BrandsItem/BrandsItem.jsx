import React from 'react'
import './BrandsItem.css'


const BrandsItem = () => {
  return (
    <div className="brand-item">
      <h2>
        POPULAR BRANDS
        <button>See All</button>
      </h2>
      <div className='grid-brand'>
      <img src="https://cdn.nutrabay.com/wp-content/uploads/2017/09/muscletech-logo.jpg" alt="" />
      <img src="https://cdn.nutrabay.com/wp-content/uploads/2018/05/ultimate-nutrition-logo.jpg" alt="" />
      <img src="https://cdn.nutrabay.com/wp-content/uploads/2019/05/MyProtein-Logo-25thMay.jpg" alt="" />
      <img src="https://cdn.nutrabay.com/wp-content/uploads/2019/08/Big-Muscles-Nutrition-New-Logo.jpg" alt="" />
      <img src="https://cdn.nutrabay.com/wp-content/uploads/2018/05/isopurelogo-1.jpg" alt="" />
      <img src="https://cdn.nutrabay.com/wp-content/uploads/2022/03/Nutrabay-top-logo-blue.png" alt="" />
      <img src="https://cdn.nutrabay.com/wp-content/uploads/2018/05/dymatize-logo.jpg" alt="" />
    </div>
    </div>
  )
}

export default BrandsItem
