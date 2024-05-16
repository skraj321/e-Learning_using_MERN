// Success.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Success.css"; // Import the CSS file

export const Success = () => {
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    const fetchPaymentData = async () => {
      try {
        const response = await fetch("http://localhost:3800/payment/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }), 
        });
        
        if (!response.ok) {
          throw new Error("Failed to fetch payment data");
        }
        
        const data = await response.json();
        setPaymentData(data);
      }  catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };

    fetchPaymentData();
  }, []);

  return (
    <div className="success-container">
      <h1>Thank You for Your Purchase!</h1>
     
      {paymentData && (
        <div>
           <p className="success-message">Your course has been successfully purchased.</p>
          <div className="success-details">
          <p className="success-details">paymentId: {paymentData._id}</p>
          <p className="success-details">userId: {paymentData.userId}</p>
            <p className="success-details">Course: {paymentData.productName}</p>
            <p className="success-details">Price: ₹{paymentData.amount}</p>
            <p className="success-details">Time: {paymentData.createdAt}</p>
           
          </div>
        </div>
      )}
      <Link to="/learning">
        <button className="success-button">Visit Your Learning Page</button>
      </Link>
    </div>
  );
};
