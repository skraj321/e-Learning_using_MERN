// CourseDetails.js
import React, { useState, useEffect } from "react";
import "./Detail.css";
import { Button } from "@material-tailwind/react";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const CourseDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  if (localStorage.getItem("token") == null) {
    navigate("/sign-in");
  }

  useEffect(() => {
    // Function to fetch course details
    const fetchCourseDetails = async () => {
      try {
        // Fetch course details based on the ID
        const response = await fetch(
          `http://localhost:3800/course/getCourse/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch course details");
        }
        const data = await response.json();
        console.log(data);
        setCourse(data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    // Call the fetchCourseDetails function
    fetchCourseDetails();
  }, [id]); // Trigger the effect whenever the 'id' parameter changes

  return (
    <div>
      {course ? (
        <div className="video-content">
          <div className="video-player">
            <div>
              <iframe
                className="video"
                src={course.videoUrl}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="content">
              <h2>
                <span style={{ color: "blue" }}>{course.title} </span>
              </h2>

              <div className="card">
                <div className="card-info">
                  <div className="info-item">
                    <span className="info-label">Get Started</span> <br />
                    <a
                  href={course.resource}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="info" variant="outlined">
                    Resource
                  </Button>
                </a>
                  </div>
                  <div className="divider"></div>
                  <div className="info-item">
                    <span className="info-label">Instructor</span>
                    <br />
                    <p className="info-value" style={{ paddingTop: "10px" }}>
                      {course.instructor}
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="info-item">
                    <span className="info-label">Duration</span> <br />
                    <p className="info-value1">{course.duration} hrs</p>
                  </div>
                </div>
              </div>
              <div className="content-text">{course.description}</div>
            </div>
            <div className="rating-container">
              <div className="rating-text">
                <h2>Course Rating</h2>
              </div>
              <div className="rating">
                <div className="rating-box" >
                  <Card>
                    <CardContent>
                      <div className="rating-number">{course.rating} </div>
                      <Rating name="size-medium" defaultValue={5} />
                      <div>(8 Review)</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="rating-summary">
                  <p style={{ color: "black", fontSize: "20px" }}>
                    5
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                      sx={{ paddingLeft: "10px" }}
                    />
                  </p>

                  <p style={{ color: "black", fontSize: "20px" }}>
                    4
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                      sx={{ paddingLeft: "10px" }}
                    />
                  </p>
                  <p style={{ color: "black", fontSize: "20px" }}>
                    3
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                      sx={{ paddingLeft: "10px" }}
                    />
                  </p>
                  <p style={{ color: "black", fontSize: "20px" }}>
                    2
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                      sx={{ paddingLeft: "10px" }}
                    />
                  </p>
                  <p style={{ color: "black", fontSize: "20px" }}>
                    1
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                      sx={{ paddingLeft: "10px" }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CourseDetails;
