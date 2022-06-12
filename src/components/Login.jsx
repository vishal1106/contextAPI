import React, { useContext } from 'react'

import { AuthContext } from './AuthContext'

const Login = () => {
    const {emailhandler,submithandler,Passhandler,final,setFinal}=useContext(AuthContext)
   

    
  return (
    <div>Login:-
        <form onSubmit={submithandler}>
            <input type="text" placeholder='Enter The Email...' onChange={emailhandler} />
          
            <input type="password"  placeholder='Enter The Password' onChange={Passhandler}/>
            <button >Submit</button>
        </form>
        {
         final.map((x,index)=>{
          
          return <div key={x.id}>Email:- {x.email},pass:- {x.pass}
          <button onClick={()=>{
         
            final.splice(index,1);
         
            setFinal([...final])
          
          }}>Delate</button>
          </div>
            
         })
        }
    </div>
  )
}

export default Login