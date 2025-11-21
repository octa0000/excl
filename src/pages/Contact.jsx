import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaPlus } from "react-icons/fa6";
import { increment, decrement, send, addColor } from '../redux/slice/countSlice';
import { FaMinus } from "react-icons/fa";

function Contact() {
  const {timer, color} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const [text, setText] = useState("")

  return (
    <div>
      Contact
      <h2>{timer}</h2>
      <button onClick={() => dispatch(increment())}><FaPlus/></button>
      <button onClick={() => dispatch(decrement())}><FaMinus /></button>
      <button onClick={() => dispatch(send(7))}>Send</button> <br />
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}/>

        <button onClick={() => dispatch(addColor(text))}>Add</button>
        <div style={{width: "200px", height: "250px", backgroundColor: color}}></div>
    </div>
  )
}

export default Contact
