import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function Privatecompo() {
    //hiding siginu page after geting data in localstorage
    const auth = localStorage.getItem("user");
    return (auth ? <Outlet /> : <Navigate to="/signup" />)
}
