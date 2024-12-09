import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth" 
import {auth} from "../firebase/config"

export const SignUp=()=>{
    
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit=()=>{
        createUserWithEmailAndPassword(auth, email, password).then((value)=>console.log(value, "User Created Successfully"))
        setEmail("")
        setPassword("")
    }
    return(
        <>
        <label htmlFor="email"></label>
        <input type="text" onChange={(e)=>setEmail(e.target.value)}  value={email} placeholder="Enter Email" name="email" />
        <label htmlFor="password"></label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} name="password" placeholder="Enter Password" />
        <button onClick={handleSubmit} > Sign Up</button>
        </>
    )
}