import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import "./Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const Contact = () => {
  const handleSocialMediaClick = (url) => {
    window.open(url, "_blank"); // Opens link in a new tab
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailError, setEmailError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the form data to your backend or handle it as needed
    if (!validateEmail()) {
      return;
    }
    console.log(formData);
    alert("Message sent!");
  };

  const validateEmail = () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    setEmailError(isValid ? "" : "Invalid email address");
    return isValid;
  };

  return (
    <div>
      <div className="touch">
        <div className="cont-content">
          <div className="get-in">
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Get In Touch
            </Typography>
            <p>
              Have a question, feedback, or just want to say hello? We're here
              to help! Reach out to us using any of the methods below and our
              dedicated team will get back to you as soon as possible.
            </p>
          </div>
          <div>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocationOnIcon className="icons" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Address"
                  secondary="1st cross road, hebbal kempapura"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ marginTop: "25px" }}>
                    <EmailIcon className="icons" />
                  </Avatar>
                </ListItemAvatar>
                <div className="mail">
                  <ListItemText
                    primary="E-mail"
                    secondary="raghavkashyap4046@gmail.com"
                  />
                  <ListItemText secondary="sahebkumar2812@gmail.com" />
                </div>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ marginTop: "25px" }}>
                    <LocalPhoneIcon className="icons" />
                  </Avatar>
                </ListItemAvatar>
                <div className="numb">
                  <ListItemText primary="Phone" secondary="+91 7079483509" />
                  <ListItemText secondary="+91 8651245603" />
                </div>
              </ListItem>
            </List>
          </div>
          <Divider variant="middle" sx={{ backgroundColor: "black" }} />
          <div className="social-media">
            <h3>SOCIAL MEDIA</h3>
            <div style={{ paddingLeft: "10px" }}>
              <IconButton
                onClick={() =>
                  handleSocialMediaClick("https://www.facebook.com/")
                }
              >
                <FacebookIcon
                  sx={{
                    color: "grey",
                    "&:hover": {
                      backgroundColor: "blue",
                      boxShadow: "0px 0px 0px 5px blue",
                      borderRadius: "50px",

                      // Change to your desired hover background color
                    },
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => handleSocialMediaClick("https://twitter.com/")}
              >
                <TwitterIcon
                  sx={{
                    color: "grey",
                    "&:hover": {
                      backgroundColor: "blue",
                      boxShadow: "0px 0px 0px 5px blue",
                      borderRadius: "50px",

                      // Change to your desired hover background color
                    },
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() =>
                  handleSocialMediaClick("https://www.instagram.com/")
                }
              >
                <InstagramIcon
                  sx={{
                    color: "grey",
                    "&:hover": {
                      backgroundColor: "blue",
                      boxShadow: "0px 0px 0px 5px blue",
                      borderRadius: "50px",

                      // Change to your desired hover background color
                    },
                  }}
                />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="contact-container">
          <Container maxWidth="xs" className="contact-form-container">
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Send a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                error={emailError !== ""}
                helperText={emailError}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Message"
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button
                variant="contained"
                type="submit"
                className="send-button"
                sx={{
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "cadetblue",
                    color: "black",

                    // Change to your desired hover background color
                  },
                }}
              >
                Send
              </Button>
            </form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Contact;