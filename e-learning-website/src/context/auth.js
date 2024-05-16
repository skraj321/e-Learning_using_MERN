import { useState,useContext,useEffect,createContext } from "react";

const AuthContext=createContext()

const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        user:null,
        token:""
    })

    
    
    useEffect(()=>{
        const data=localStorage.getItem("token")
        if(data){
            
            setAuth({
                ...auth,
                user: data.user,
                token:data.token,
            });
        }
    },[]);

    
    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}
//custom hook
const useAuth=()=>useContext(AuthContext)

export {useAuth,AuthProvider}