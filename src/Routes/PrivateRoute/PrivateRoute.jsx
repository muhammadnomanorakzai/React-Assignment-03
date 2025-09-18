import React from 'react'
import {  Navigate ,Outlet } from 'react-router-dom'
function PrivateRoute() {
     const user = localStorage.getItem("currentUser")

     return user ? <Outlet/> :  <Navigate to ="/Register"/>
  
}

export default PrivateRoute
