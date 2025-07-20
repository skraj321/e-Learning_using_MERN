import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import { Spinner } from "../Spinner";

export const PrivateRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth,setAuth] = useAuth(); 

  useEffect(() => {
    const authCheck = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/user/user-auth`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        });
        const data = await response.json();
        console.log("API Response:", data); 
        if (response.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Error while checking authentication:", error);
        setOk(false); // Set ok to false in case of errors
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner/> ;
};

