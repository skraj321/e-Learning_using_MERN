import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Order.css";

export const Ordered = () => {
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await fetch("http://localhost:3800/payment/ordered");
        
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
    <div><h1 className="pc">Purchased Courses!</h1>
    <div className="order-container">
      
     
      {paymentData.length > 0 ? (
        paymentData.map((payment) => (
          <div key={payment._id} className="order-card">
            <div className="success-details">
              <p className="success-details">Payment ID: {payment._id}</p>
              <p className="success-details">User ID: {payment.userId}</p>
              <p className="success-details">Course: {payment.productName}</p>
              <p className="success-details">Price: ₹{payment.amount}</p>
              <p className="success-details">Time: {payment.createdAt}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No purchased courses found.</p>
      )}
    </div>
    </div>
  );
};
