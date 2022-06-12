import React, { createContext,  useState } from 'react'
import { useNavigate } from 'react-router-dom'







 export const AuthContext=createContext()
 export const AuthProvider = ({children}) => {
 const [email,setEmail]=useState("")
 const [pass,setPass]=useState("")
const [final,setFinal]=useState([])
const [isauth,setIsauth]=useState(false)
const navigate=useNavigate()
  const emailhandler=(e)=>{
    setEmail(e.target.value)
  }

 const submithandler=(e)=>{
  e.preventDefault();
  
  let details={ id:new Date().getTime().toString(),email:email,pass:pass}


  setFinal([
    ...final,details
  ])
setIsauth(true)
navigate("/book")

 }
const Passhandler=(e)=>{
  setPass(e.target.value)
}

 
  return <AuthContext.Provider value={{emailhandler,submithandler,Passhandler,final ,setFinal,isauth}}>{children}</AuthContext.Provider>
 
}

