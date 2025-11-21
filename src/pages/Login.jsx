import React, { useState } from 'react'
import tel from "../assets/image/tel.png"
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

function Login() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    async function sainUser() {
        try {
            const res = await signInWithEmailAndPassword(auth, login, password)
            if (res) {
                toast.success("user was created")
            }
            console.log(res);

        } catch (error) {
            console.log(error);
            toast.error(error.message || "email already use")
        }
    }

    return (

        <div className='signinBody'>
            <img src={tel} className='shop' alt="" />
            <div className='signinInput'>
                <div className='signinTxt'>
                    <h1>Log in to Exclusive</h1>
                    <h2>Enter your details below</h2>
                </div>
                <input onChange={(e) => setLogin(e.target.value)} value={login} type="email" placeholder='Email or Phone Number' />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' />
                <div className='signinBtn'>
                    <button onClick={sainUser}>Log in</button>
                    <Link>Forget Password</Link>

                </div>
            </div>
        </div>
    )
}

export default Login