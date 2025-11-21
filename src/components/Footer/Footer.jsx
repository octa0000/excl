import React from 'react'
import "./Footer.scss"
import qkod from "../../assets/svg/qkod.svg"

function Footer() {
  return (
    <div className='footerBody'>
      <div className='footerLeft'>
        <h1 className='logo'>Exclusive</h1>
        <h2>Subscribe</h2>
        <p>Get 10% off your first order</p>
        <input type="text" placeholder='Enter your email' />
      </div>
      <div className='footerRight'>
        <div className='footerTxt'>
          <h1>Support</h1>
          <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </div>
        <div className='footerTxt'>
          <h1>Account</h1>
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </div>
        <div className='footerTxt'>
          <h1>Quick Link</h1>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </div>
        <div className='footerTxt'>
          <h1>Download App</h1>
          <img src={qkod} className='qr' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer