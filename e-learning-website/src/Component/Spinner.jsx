import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

export const Spinner = () => {
    const [count,setCount]=useState(5)
    const navigate=useNavigate()

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((preValue)=> --preValue)
        },1000)
        count === 0 && navigate('/sign-in')
        return ()=> clearInterval(interval)
    },[count,navigate])
    return (
        <>
        <div>
            <h1>Redirecting to you {count} second </h1>
            <span>Loading</span>
        </div>

        </>
    )
}