import { useEffect,useRef,useState } from "react"

const Otp=()=>{
    const in1ref=useRef(null)
    const in2ref=useRef(null)
    const in3ref=useRef(null)
    const in4ref=useRef(null)
    const[in1,setin1]=useState('')
    const[in2,setin2]=useState('')
    const[in3,setin3]=useState('')
    const[in4,setin4]=useState('')
   
      useEffect(()=>{
  
          in1ref.current.focus()
        
        
        
      },[])
      const in1Handler=(e)=>{
        if(e.target.value.length===0){
          in1ref.current.focus()
        }
        if(e.target.value.length<2){
          in2ref.current.focus()
          setin1(e.target.value)
        }
        
       
      }
  
      const in2Handler=(e)=>{
        if(e.target.value.length===0){
          in2ref.current.focus()
        }
        if(e.target.value.length<2){
          in3ref.current.focus()
          setin2(e.target.value)
        }
        
      }
  
      const in3Handler=(e)=>{
        if(e.target.value.length===0){
          in3ref.current.focus()
        }
        if(e.target.value.length<2){
          in4ref.current.focus()
          setin3(e.target.value)
        }
        
      }
  
      const in4Handler=(e)=>{
        if(e.target.value.length===0){
          in4ref.current.focus()
        }
      if(e.target.value.length<2){
        setin4(e.target.value)
      }
       
      
        
        
        
      }
    return(
        <div>
             <h1>Type your OTP</h1>
      <div className='inputsotp'>
        <input type="text" value={in1} onChange={in1Handler} ref={in1ref} />
        <input type="text" value={in2} onChange={in2Handler} ref={in2ref}/>
        <input type="text" value={in3} onChange={in3Handler} ref={in3ref}/>
        <input type="text" value={in4} onChange={in4Handler} ref={in4ref}/>
      </div>
        </div>
    )
}