import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillMail} from 'react-icons/ai'
import {FaGooglePay} from 'react-icons/fa'
import {SiPaytm} from 'react-icons/si'
import {AiFillBank} from 'react-icons/ai'

import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className="quick-links">
        <h4>QUICK LINKS</h4>
        <ul>
          <li>Contact Us</li>
          <li>Brands</li>
          <li>Cart</li>
          <li>Products</li>
          <li>Certificates</li>
        </ul>
      </div>

      <div className="policy">
        <h4>POLICY</h4>
        <ul>
          <li>Term of Use</li>
          <li>Privacy</li>
          <li>Security</li>
        </ul>
      </div>

      <div className="connect">
        <h4>CONNECTED</h4>
        <div className="iconss">
        <BsFacebook className='ic'/>
        <AiFillInstagram className='ic'/>
        <AiFillMail className='ic'/>
        </div>
      </div>
    </div>
    <div className="payment">
      <div className="payicon">
        <AiFillBank/>
        <FaGooglePay/>
        <SiPaytm/>
      </div>
      <p>Copyright 2023 © WheySupplement.com or its affiliates. All Rights reserved.</p>
    </div>
    </>
  )
}

export default Footer
