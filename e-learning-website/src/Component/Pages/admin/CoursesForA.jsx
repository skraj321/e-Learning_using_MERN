import React, { useState, useEffect } from "react";
import "./CorForA.css";
import { Carousel } from "react-responsive-carousel";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

import { Alert, Box } from "@mui/material";
import { Container, Grid, Typography, IconButton } from "@mui/material";


const CoursesForA = () => {
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

  const deleteCourse = async (id) => {
    try {
      const response = await fetch(`http://localhost:3800/course/admin/deleteCourse/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete course");
      } 
      setCourses(data.filter(course => course._id !== id));
      alert("Course deleted successfully");
      
      navigate("/admin/courses");
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="bg">
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
                      <Link to={`/admin/updatecourse/${item._id}`}>
                        <button>Edit</button>
                      </Link>
                    </a>
                    <button onClick={() => deleteCourse(item._id)}>Delete</button>
                  </div>
                </Link>
              );
            })}
        </ul>
      </div>
      <div className="footer-container">
        <Box
          component="footer"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            p: 6,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="white" gutterBottom>
                  About Us
                </Typography>
                <Typography variant="body2" color="white">
                  Welcome to our e-learning platform, where knowledge meets
                  innovation. At SeekhoOnline, we are passionate about
                  revolutionizing education, providing accessible and engaging
                  learning experiences for students of all ages and backgrounds.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="white" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body2" color="white">
                  1st Main Road, Hebbal Kempapura, Bangalore
                </Typography>
                <Typography variant="body2" color="white">
                  raghavkashyap@gmail.com <br /> sk8651245603@gmail.com
                </Typography>
                <Typography variant="body2" color="white">
                  Phone: +91 7079483509
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="white" gutterBottom>
                  Follow Us
                </Typography>
                <Link href="https://www.facebook.com/" sx={{ color: "white" }}>
                  <Facebook />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  sx={{ pl: 1, pr: 1, color: "white" }}
                >
                  <Instagram />
                </Link>
                <Link href="https://www.twitter.com/" sx={{ color: "white" }}>
                  <Twitter />
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Typography variant="body2" color="white" align="center">
                {"Copyright © "}
                <Link color="inherit" href="https://your-website.com/">
                  SeekhoOnline
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default CoursesForA;
