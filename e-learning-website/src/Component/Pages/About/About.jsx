import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import "./About.css";
import Link from "@mui/material/Link";
import { useAuth } from "../../../context/auth";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,

  IconButton,
} from "@mui/material";

const About = () => {
  return (
    <div>
      

      <div className="about-container">
        <div className="aboutus">
          <div className="about">
          <h1>About Us</h1>
          <h2>
            Welcome to SeekhoOnline e-learning platform.
          </h2>
          </div>
        </div>
        <div className="img-container">
          <div className="picture">
            <div className="image-container">
              <img
                src="rg.jpg"
                alt=""
                width="250px"
                height="250px"
              />
              <div className="image-text">Raghav Founder&CEO</div>
            </div>
            <div className="image-container">
              <img
                src="sk.jpg"
                alt=""
                width="250px"
                height="250px"
              />
              <div className="image-text">Saheb Founder&CEO</div>
            </div>
          </div>
          <div className="our-story">
            <h2>Our Story</h2>
            <p>
            Our platform offers an extensive array of courses led by industry experts renowned for their real-world experience and profound knowledge. They bring their invaluable insights to the virtual classroom, enriching your learning journey with practical wisdom and hands-on expertise.

            Whether you're aiming to propel your career to new heights within your current field or embark on a transformative journey into a different industry, our courses are meticulously designed to equip you with the indispensable knowledge and skills essential for thriving in today's fiercely competitive job market.

          Our commitment goes beyond mere education; it's about empowering you to achieve your aspirations and reach your fullest potential. With our comprehensive curriculum and dynamic learning environment, you'll not only acquire essential expertise but also cultivate the confidence and adaptability needed to succeed in any professional endeavor. </p>
          </div>
        </div>
        <Divider variant="middle" sx={{ backgroundColor: "black" }} />
        <div className="vision-container">
          <div className="our-vision">
            <h1>OUR VISION</h1>
          </div>
          <div className="vision">
            <p>
              <strong>
                At SeekhoOnline, we envision a future where education knows no
                boundaries, offering flexible and dynamic learning opportunities
                that adapt to the diverse needs and aspirations of learners.
              </strong>
            </p>
            <br />
            <p>
              Our vision is to revolutionize education by providing accessible,
              engaging, and innovative online learning experiences for learners
              worldwide. We strive to empower individuals of all backgrounds to
              unlock their full potential through personalized learning
              pathways, cutting-edge technology, and a supportive online
              community. Our commitment lies in fostering a culture of
              continuous learning and growth, where every learner can thrive and
              succeed in their educational journey, regardless of geographical
              constraints or traditional barriers. Our goal is to inspire
              curiosity, cultivate critical thinking skills, and ignite a
              lifelong passion for learning in every individual we reach.
              Through collaboration with educators, experts, and industry
              leaders, we aim to stay at the forefront of educational
              innovation, constantly evolving to meet the evolving demands of
              the digital age.
            </p>
          </div>
        </div>
        <Divider variant="middle" sx={{ backgroundColor: "black" }} />
        <div className="mission-container">
          <div className="our-mission">
            <h1>OUR MISSION</h1>
          </div>
          <div className="mission">
            <p>
              <strong>
                At SeekhoOnline, our mission is to revolutionize education
                through accessible, engaging, and interactive e-learning
                experiences.
              </strong>
            </p>
            <br />
            <p>
              We strive to empower learners worldwide by providing high-quality
              content, innovative tools, and personalized learning paths
              tailored to each individual's needs. Join us on a journey of
              discovery, where knowledge knows no bounds.At the heart of our
              mission lies a commitment to democratize education, making it
              accessible to anyone, anywhere, regardless of background or
              circumstance. Through cutting-edge technology and expertly curated
              content, we aim to inspire curiosity, foster critical thinking,
              and cultivate lifelong learners. Together, let's unlock the doors
              to limitless possibilities and embark on a transformative
              educational journey like never before.
            </p>
          </div>
        </div>
        <Divider variant="middle" sx={{ backgroundColor: "black" }} />
        <div className="instructor-container">
          <div className="instructor">
            <h1>Meet The Instructor</h1>
          </div>
          <div className="maincard1">
            <div className="card1">
              <img
                className="profile-image"
                src="sk.jpg"
                alt="Profile Image"
              />
              <div className="name">Mr. Saheb</div>
              <div className="expert">Web Development Instructor</div>
              <div className="social">
                <Link href="https://www.facebook.com/" color="inherit">
                  <Facebook />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  color="inherit"
                  sx={{ pl: 1, pr: 1 }}
                >
                  <Instagram />
                </Link>
                <Link href="https://www.twitter.com/" color="inherit">
                  <Twitter />
                </Link>
              </div>
            </div>

            <div className="card1">
              <img
                className="profile-image"
                src="rg.jpg"
                alt="Profile Image"
              />
              <div className="name">Mr. Raghav</div>
              <div className="expert">Java Development Instructor</div>
              <div className="social">
                <Link href="https://www.facebook.com/" color="inherit">
                  <Facebook />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  color="inherit"
                  sx={{ pl: 1, pr: 1 }}
                >
                  <Instagram />
                </Link>
                <Link href="https://www.twitter.com/" color="inherit">
                  <Twitter />
                </Link>
              </div>
            </div>
            <div className="card1">
              <img
                className="profile-image"
                src="sm.jpg"
                alt="Profile Image"
              />
              <div className="name">Mr. Samir</div>
              <div className="expert">Python Development Instructor</div>
              <div className="social">
                <Link href="https://www.facebook.com/" color="inherit">
                  <Facebook />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  color="inherit"
                  sx={{ pl: 1, pr: 1 }}
                >
                  <Instagram />
                </Link>
                <Link href="https://www.twitter.com/" color="inherit">
                  <Twitter />
                </Link>
              </div>
            </div>
            <div className="card1">
              <img
                className="profile-image"
                src="hc.jpg"
                alt="Profile Image"
              />
              <div className="name">Mr. Shubham</div>
              <div className="expert">MERN Development Instructor</div>
              <div className="social">
                <Link href="https://www.facebook.com/" color="inherit">
                  <Facebook />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  color="inherit"
                  sx={{ pl: 1, pr: 1 }}
                >
                  <Instagram />
                </Link>
                <Link href="https://www.twitter.com/" color="inherit">
                  <Twitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
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
export default About;
