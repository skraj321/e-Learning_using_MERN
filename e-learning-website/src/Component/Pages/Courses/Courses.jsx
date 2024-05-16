import React, { useState, useEffect } from "react";
import "./Courses.css";
import { Carousel } from "react-responsive-carousel";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";


import { Box } from "@mui/material";
import { Container, Grid, Typography, IconButton } from "@mui/material";


const Courses = () => {
  const navigate = useNavigate();
  const [data, setCourses] = useState([]);
  const [productId, setProductId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3800/course/getCourse");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setCourses(data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (productId) => {
    const userId = localStorage.getItem("id");

    if ( userId == null) {
      navigate("/sign-in");
    }else{
    console.log("Product Id:", productId);
    console.log("User Id:", userId);

    fetch("http://localhost:3800/user/add-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
        userId: userId,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add item to cart");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Item added to cart:", data);
       
        alert("course added to cart successfully");

        // You can perform additional actions here, such as updating UI or state
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
        // Handle errors
      });
    }
  };
// //payment integration
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
    <div>
      <div className="carousel-container">
        <div className="text1">
          <h1>Let's Learn Something New</h1>
        </div>

        <div className="video-container">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            emulateTouch={true}
            swipeable={true}
            dynamicHeight={true}
          >
            <div>
              <iframe
                width="560"
                height="415"
                src="video1.mp4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                autoPlay={false}
              ></iframe>
            </div>
            <div>
              <iframe
                width="560"
                height="415"
                src="E_learning(1080p).mp4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                autoPlay={false}
              ></iframe>
            </div>
            <div>
              <iframe
                width="560"
                height="415"
                src="Online_Learning__A_World_of_Possibilities(1080p).mp4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                autoPlay={false}
              ></iframe>
            </div>
          </Carousel>
        </div>
      </div>
      <div>
        <h2 className="course-head">Courses to get you started</h2>
        <hr />
        <ul className="course-list">
          {data &&
            data.length > 0 &&
            data.map((item, index) => {
              return (
                <Link
                  key={item._id}
                  to={`/courses/${item._id}`}
                  className="course-card"
                >
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
                    <a href="/">
                      {" "}
                      <button onClick={(e)=>{ e.preventDefault(); handlePayment(item.price,item.title)}}>Enroll Now</button>
                    </a>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(item._id);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </Link>
              );
            })}
        </ul>
      </div>
      
    </div>
  );
};

export default Courses;
