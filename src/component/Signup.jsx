import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

const Signup = () => {
    const [name, setUsername] = useState("")
    const [email, setUseremail] = useState("")
    const [password, setUserpassword] = useState("")
    const navigate = useNavigate()

    const formSubmit = async () => {
        const sendData = await fetch("http://localhost:8000/users", {
            method: "post",
            body: JSON.stringify({ name, email, password }), //kya bhejna hai 
            headers: {
                "Content-Type": "application/json"
            },
        })
        const result = await sendData.json()
        console.log(result)
        localStorage.setItem("user", JSON.stringify(result))
        navigate("/")
    }

    //signup hone ke badd navigate karna 

    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) {
            navigate("/")
        }
    },[])
    return (
        <div className='reg_container'>
            <div className='regbox'>
                <h1>Register</h1>
                <input
                    value={name}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text" placeholder='Enter Name' />
                <input
                    value={email}
                    onChange={(e) => setUseremail(e.target.value)}
                    type="email" placeholder='Enter Email' />
                <input
                    value={password}
                    onChange={(e) => setUserpassword(e.target.value)}
                    type="password" placeholder='Enter Password' />
                <div className='btn'>
                    <button className='signup' type='button' onClick={formSubmit}>Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Signup