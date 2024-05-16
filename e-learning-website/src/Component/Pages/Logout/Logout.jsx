import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export const Logout=()=>{
    useEffect(()=>{
        LogoutUser();
    },[LogoutUser]);

   return <Navigate to="/sign-in"/>
};