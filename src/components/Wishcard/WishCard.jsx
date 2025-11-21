import React from 'react'
import "./Wish.scss"
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";    
import { useDispatch } from 'react-redux';
import { deleteWish } from '../../redux/slice/WishSlice';

function WishCard({data}) {
  const dispatch = useDispatch()
  return (
    <div className='wishcard'>
      <div className='wish-image'>
        <img src={data.thumbnail  } alt="" />
        <div className='discount'></div>
        <div className='icons'><RiDeleteBin6Line onClick={() => dispatch(deleteWish(data.id))} className='delete'/></div>
        <button className='btn'> <TiShoppingCart />  Add To Card</button>
      </div>
      <div className='wish-content'>
        <h3>tilte</h3>
        <div className='prices'>
            <p className='new-price'>234</p>
            <p className='old-price'>4567</p>
            
        </div>
      </div>
    </div>
  )
}

export default WishCard
