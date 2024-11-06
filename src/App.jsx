import React,{useEffect, useRef, useState} from 'react'
import './App.css'

const App=()=>{
  const inref=useRef([])

  const[otp,setOtp]=useState(['','','',''])
  
  useEffect(()=>{
    inref.current[0].focus()
  },[])
  
const handleInput=(e,index)=>{
  const value=e.target.value

  if(/^[0-9]$/.test(value)||value===""){
    const newOtp=[...otp]
    newOtp[index]=value
    setOtp(newOtp)

    if(value && index < inref.current.length-1){
      inref.current[index+1].focus()
    }
  }


}


const handleKeyDown=(e,index)=>{
  if(e.key==="Backspace" && index > 0 && !otp[index]){
    inref.current[index-1].focus()
  }
}
  return(
    <div >
      <div className="otpbody">
      <h1>Type your OTP</h1>
      <div className='inputsotp'>
       
       {
        otp.map((item,index)=>{
          return(
           

              <input type="text"
               ref={(el)=>(inref.current[index]=el)}
                value={item}
                key={index}
                onChange={(e)=>handleInput(e,index)}    
                onKeyDown={(e)=>handleKeyDown(e,index)}
                maxLength="1"
              />
         
          )
        })
       }
        
      </div>
      </div>
    </div>
  )
}


export default App