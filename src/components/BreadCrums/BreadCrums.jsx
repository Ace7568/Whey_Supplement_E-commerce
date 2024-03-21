import React from 'react'
import {BiRightArrow} from 'react-icons/bi'

const BreadCrums = (props) => {
    const {product} = props;
  return (
    <div className="breadcrum" style={{fontSize:"0.8rem", marginLeft:"4vh"}}>
        HOME <BiRightArrow/> SHOP <BiRightArrow/> {product.Category} <BiRightArrow/> {product.name}
    </div>
  )
}

export default BreadCrums
