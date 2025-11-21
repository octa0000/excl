import React from 'react'
import "./Card.scss"
import game from "../../assets/image/game.png"
import star from "../../assets/svg/star.svg";
import { FaHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch,useSelector } from 'react-redux';
import { addWish, deleteWish } from '../../redux/slice/wishSlice';
import { addCart } from '../../redux/slice/cartSlice';

function Card({data}) {
   const{list } = useSelector((state) => state.wishlist)

  function findNewPrice(price, discount) {
   return price - (price * discount / 100)
  }
 
  const dispatch = useDispatch()
  const isLiked = list.some((x) => x.id == data.id)
  
  

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={data.thumbnail} alt="" />
        <div className='discount'>-{data.discountPercentage}%</div>
        <div className='icons'>
          {
          isLiked ? 
          <FaHeart onClick={() => dispatch(deleteWish(data.id))}  
          className='heart-red' />  : 
          <FaHeart onClick={() => dispatch(addWish(data))}
           className='heart'/>
          }
          
          <MdOutlineRemoveRedEye className='eye' />
        </div>
        <button onClick={() => dispatch(addCart(data))}
         className='btn'>Add To Cart</button>
      </div>
      <div className='card-content'>
        <h3>{data.title}</h3>
        <div className='prices'>
            <p className='new-price'>{findNewPrice(data.price, data.discountPercentage).toFixed()} </p>
            <p className='old-price'>{data.price}</p>
        </div>
        <div className='rating'>
            {
              [1,2,3,4,5].map((item) => (
                <img src={star} key={item}  />
              ))
            }
            (88)
        </div>
      </div>
    </div>
  )
}

export default Card

// redux-toolkit 
// React 
