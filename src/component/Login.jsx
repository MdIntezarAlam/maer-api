import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Login = () => {
    const [email, setUseremail] = useState("")
    const [password, setUserpassword] = useState("")
    const navigate = useNavigate()

    const formSubmit = async () => {
        const sendData = await fetch("http://localhost:8000/login", {
            method: "post",
            body: JSON.stringify({ email, password }), //kya bhejna hai 
            headers: {
                "Content-Type": "application/json"
            },
        })
        const result = await sendData.json()
        console.log(result)

        if (result.email) {
            localStorage.setItem("user", JSON.stringify(result))
            navigate("/")
        }
        else {
            alert("somthing is wrong")
        } 
    }

    //logout
    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) {
            navigate("/")
        }

    })

    return (
        <div className='reg_container'>
            <div className='regbox'>
                <h1>Login</h1>
                <input
                    value={email}
                    onChange={(e) => setUseremail(e.target.value)}
                    type="email" placeholder='Enter Email' />
                <input
                    value={password}
                    onChange={(e) => setUserpassword(e.target.value)}
                    type="password" placeholder='Enter Password' />
                <div className='btn'>
                    <button className='signup' type='button' onClick={formSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login