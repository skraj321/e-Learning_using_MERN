import React from "react";
import { Container, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import "./Footer.css"; // Import the CSS file for styling

export const Footer = () => {
  return (
    <div className="footer-container">
      <Box
        component="footer"
        className="footer"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
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
              <Link href="https://www.facebook.com/" className="social-link">
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                className="social-link"
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" className="social-link">
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
  );
};
