import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{dispaly:"flex" , backgroundColor:"red",color:"white", justifyCenter:"space-between",height:"50px",paddingTop:"10px"}}>
        <Link to="/"> Home</Link>
        <span>{"  "}</span>
       
        <Link to="/book">Book</Link>
        <span>{"  "}</span>
        <Link to="/Login">Login</Link>
    </div>
  )
}

export default Navbar