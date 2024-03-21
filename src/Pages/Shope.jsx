import React from 'react'
import Crousel from '../components/Carousel/Crousel'
import Popular from '../components/Popular/Popular'
import BrandsItem from '../components/BrandsItem/BrandsItem'
import ItemsCard from '../components/Itemscard/ItemsCard'

const Shope = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"4vh",justifyContent:'center', alignItems:"center"}}>
        <Crousel/>
        <Popular/>
        <BrandsItem/>
        <ItemsCard/>
    </div>
  )
}

export default Shope
