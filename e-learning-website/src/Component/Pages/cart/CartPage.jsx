// CartPage.js

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {loadStripe} from "@stripe/stripe-js";
import "./Cart.css";
 

export const CartPage = () => {
  

  const [data, setCartData] = useState([]);
 
  const navigate=useNavigate();
  if(localStorage.getItem("token")==null ){
    navigate("/sign-in");
  }
  
  
    const fetchCartData = async () => {
      try {
        const userId = localStorage.getItem("id"); // Assuming you store userId in localStorage
        const response = await fetch("http://localhost:3800/user/user-cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const data = await response.json();
        console.log(data);
        setCartData(data.data.cart); // Assuming the cart data is nested under 'cart' key
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
    useEffect(() => {
    fetchCartData();
  }, []);

  const removeFromCart = async (productId) => {
    try {
      const userId = localStorage.getItem("id");
      const response = await fetch("http://localhost:3800/user/remove-from-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, productId }),
      });
      if (!response.ok) {
        throw new Error("Failed to remove course from cart");
      }
      
      alert("Course removed from cart successfully");
      // Refetch cart data after removing the course
      await fetchCartData();
      
      navigate("/cart");
    } catch (error) {
      console.error("Error removing course from cart:", error);
    }
  };

const handlePayment = async (totalAmount, title) => {
  try {
    const userId = localStorage.getItem("id");
    const response = await fetch("http://localhost:3800/payment/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        userId,
        amount: totalAmount, 
        currency: "USD", 
        productName: title,
        // customerName: "Customer Name", // Pass customer name here
        // customerAddress: "Customer Address", // Pass customer address here
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to create payment intent");
    }
    const { sessionId } = await response.json();

    const stripe = await loadStripe("pk_test_51P694wAwbqKUUi7pM0R6RxFcMJ3MGVOtq6UDNdC6cAR2WTWjrpt80Q3IWxQMorxTLZHOkMc3otjPXTG9mM12Bnc800HhZU7iME");
    
    const { error } = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
    if (error) {
      throw new Error(error.message);
    }
    alert("Redirecting to Stripe Checkout...");
  } catch (error) {
    console.error("Error processing payment:", error);
    console.error("Failed to process payment. Please try again.");
  }
};



  return (
    <div className="cartpage">
    <h2 className="course-head">Your Favorite Courses</h2>
    <hr />
    <ul className="course-list">
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <Link key={item._id} to={`/courses/${item._id}`} className="course-card">
              <div className="course-content">
                <img
                  style={{ width: "100%", height: "150px" }} 
                  src={item.url}
                />  
                <h3 className="title">{item.title}</h3>
                <p className="ins">{item.briefDes || "N/A"}</p>
                <p className="ins">{item.instructor || "N/A"}</p>
                <p className="prc">₹{item.price || "N/A"} </p>
              </div>
              <div className="course-actions">
               <button onClick={(e)=>{ e.preventDefault(); handlePayment(item.price,item.title)}}>Enroll Now</button>
               <div className="course-actions">
                  <button onClick={() => removeFromCart(item._id)}>Remove</button>
                </div>
              </div>
            </Link>
          );
        })}
    </ul>
  </div> 
  );
};


