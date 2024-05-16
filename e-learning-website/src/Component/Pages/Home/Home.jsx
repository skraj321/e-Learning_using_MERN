import React from "react";
import "./Home.css";
import Fab from "@mui/material/Fab";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { Link } from "react-router-dom";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <section>
      <div className="home-container">
        <div className="container1">
          <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
            <div className="carousel-img">
              <div className="carousel-content">
                <h1>Education Opens up the Mind</h1>
                <br />
                <p>
                  Welcome to SeekhoOnline! Explore endless opportunities for
                  learning, growth, and success. Start your journey today!
                </p>
                <br />
                <div className="button">
                  <Link to="/courses" style={{ textDecoration: "none" }}>
                    <Fab
                      variant="extended"
                      size="medium"
                      sx={{
                        mr: 1,
                        backgroundColor: "white",
                        color: "black",
                        "&:hover": {
                          color: "darkblue",
                          backgroundColor: "burlywood",
                        },
                      }}
                    >
                      All Courses
                      <ArrowCircleRightOutlinedIcon
                        sx={{ fontSize: "35px", paddingLeft: "10px" }}
                      />
                    </Fab>
                  </Link>
                </div>
              </div>
              <img src="image1.jpg" />
            </div>
            <div className="carousel-img">
              <img src="image2.jpg" />
            </div>
            <div className="carousel-img">
              <img src="image4.jpg" />
            </div>
            <div className="carousel-img">
              <img src="image3.jpg" />
            </div>
            
            
          </Carousel>
        </div>
      </div>

      <div className="flex-container">
        <div className="popular-container">
          <div className="popular">
            <h1>
              Popular Courses
              <Divider
                variant="middle"
                sx={{
                  backgroundColor: "black",
                }}
              />
            </h1>
          </div>
          <div className="card-container">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="background pic.png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Web Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Covering HTML, CSS, JavaScript, ReactJs, NOdeJs,ExpressJs,
                  Mongodb and other essential technologies for building
                  websites.
                </Typography>
                <br />
                <Typography component="legend">Review</Typography>
                <Rating name="size-large" defaultValue={0} size="large" />
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small"> <Link to="/courses" style={{ textDecoration: "none" }}>Learn More</Link></Button>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="data science (2).png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Data Science and Machine Learning
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Providing an introduction to data analysis, machine learning
                  algorithms, and data visualization techniques.
                </Typography>
                <br />
                <Typography component="legend">Review</Typography>
                <Rating name="size-large" defaultValue={2} size="large" />
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small"> <Link to="/courses" style={{ textDecoration: "none" }}>Learn More</Link></Button>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="digital-marketing (1).png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Digital Marketing
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Offering courses on SEO, social media marketing, content
                  marketing, email Marketing Strategies and digital advertising
                  strategies.
                </Typography>
                <br />
                <Typography component="legend">Review</Typography>
                <Rating name="size-large" defaultValue={3} size="large" />
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small"> <Link to="/courses" style={{ textDecoration: "none" }}>Learn More</Link></Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex-container1">
        <div className="choose-container">
          <div className="choose">
            <h1>Why Choose Us?</h1>
            <p>
              Our platform offers courses led by industry experts who bring
              real-world experience and knowledge to the virtual classroom.
              Whether you're looking to advance in your current career or switch
              to a new field, our courses provide the knowledge and skills
              needed to excel in today's competitive job market.
            </p>
          </div>
          <div className="review">
            <div className="best">
              <h2>
                <LocalFireDepartmentIcon className="icon" />
                Best Industry Leaders
              </h2>
              <p>
                Our online learning platform brings you courses curated by
                industry leaders, ensuring you receive top-tier expertise in
                every lesson.
              </p>
            </div>

            <div className="learn">
              <h2>
                <ScheduleIcon className="icon" />
                Learn Online at Your Own Place
              </h2>
              <p>
                Discover the freedom of learning at your own pace with our
                flexible online courses. Join our community of learners and
                access courses that allow you to study anytime, anywhere, and at
                your own speed.
              </p>
            </div>

            <div className="certificate">
              <h2>
                <BrightnessLowIcon className="icon" />
                Professional Certification
              </h2>
              <p>
                Enhance your career prospects with our Professional
                Certification courses, meticulously crafted to equip you with
                industry-recognized skills and credentials. With expert-led
                instruction and hands-on projects, you'll gain practical
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
