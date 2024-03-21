import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineMenuFold} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
import { ShopContext } from '../ShopContext/ShopContext'

const Navbar = () => {

  const [menu,setmenu] = useState("Shop"); 

  const {getTotalCartItems} = useContext(ShopContext);

  const handleclick = () => {
    document.getElementById('nav-menu').style.display = "flex";
  }

  const handlecross = () => {
    console.log(document.getElementById('nav-menu'))
    document.getElementById('nav-menu').style.display = "none";
  }
  return (
    <div className='nav'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Whey <br />Supplements</p>
      </div>

      <ul className='nav-menu' id='nav-menu'>
        <li onClick={() => setmenu("Shop")}><Link to='/' style={{textDecoration: "none", color: '#171717'}}>Shop</Link>{menu === "Shop" ? <hr/>:""}</li>
        <li onClick={() => setmenu("Brands")}><Link to='/brands' style={{textDecoration: "none", color: '#171717'}}>Brands</Link>{menu === "Brands" ? <hr/>:""}</li>
        <li onClick={() => setmenu("Offer")}><Link to='/offerzone' style={{textDecoration: "none", color: '#171717'}}>Offer Zone</Link> {menu === "Offer" ? <hr/>:""}</li>
        <li onClick={() => setmenu("Best")}><Link to='/bestseller' style={{textDecoration: "none", color: '#171717'}}>Best Seller</Link>  {menu === "Best" ? <hr/>:""}</li>
        <li onClick={() => setmenu("Cont")}><Link to='/contactus' style={{textDecoration: "none", color: '#171717'}}>Contact US</Link>  {menu === "Cont" ? <hr/>:""}</li>
        <RxCross2 className='cross' onClick={handlecross}/>
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <Link to='/cart' style={{color:"black"}}><AiOutlineShoppingCart className='cart'/></Link>
        <div className="count">{getTotalCartItems()}</div>
      </div>

      <AiOutlineMenuFold className='menuicon' onClick={handleclick}/>
    </div>
  )
}

export default Navbar
