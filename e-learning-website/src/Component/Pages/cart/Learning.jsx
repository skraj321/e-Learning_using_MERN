// UserLearningPage.js

import React, { useState, useEffect } from 'react';
import './Learning.css'; 
import { Link, useNavigate } from "react-router-dom";

const Learning = () => {
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchasedCourses = async () => {
      try {
        
        const userId = localStorage.getItem('id');

        // Make a POST request to fetch purchased courses after payment
        const response = await fetch('http://localhost:3800/payment/purchased-courses', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch purchased courses');
        }

        const data = await response.json();
        setPurchasedCourses(data); 
        console.log(data)

        setLoading(false);
      } catch (error) {
        setError(error.message || 'Failed to fetch purchased courses');
        setLoading(false);
      }
    };

    fetchPurchasedCourses();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="user-learning-page">
      <h1 className="page-title">My Courses</h1>
      
      <ul className="course-list">
        {purchasedCourses.map(course => (
           <li key={course._id} className="course-card">
           <Link to={`/courses/${course._id}`} className="course-card">
             <div className="course-content">
               <img src={course.url} alt={course.title} className="course-image" />
               <h3 className="course-title">{course.title}</h3>
               <p className="inst">{course.instructor || "N/A"}</p>
               <p className="ins">{course.briefDes || "N/A"}</p>
               
             </div>
             <div className="course-actions1">
               <button className="view-button">View Details</button>
             </div>
           </Link>
         </li>
        ))}
      </ul>
    </div>
  );
};

export default Learning;
