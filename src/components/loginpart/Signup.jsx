import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Box, Input, Typography, Button } from '@mui/material'
import loginbg from "../Images/beautiful-wooden-pathway-going-breathtaking-colorful-trees-forest_181624-5840.jpg.avif"
import usericon from "../Images/user-octagon-svgrepo-com.png"

const Signup = () => {


  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
          username: "",
          email: "",
          password: ""
      });
      console.log(message);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value 
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        //send to backend here
        try{
            const response = await axios.post('https://jj-server-thunderarby-thunderarbys-projects.vercel.app/api/user', {
              name: formData.username,
              email: formData.email,
              password: formData.password
            });setMessage(response.data.message);
        } catch (error) {
          setMessage(error.response?.data?.message || "Login failed");
        }
        // Form submission logic here
        console.log("Form submitted:", formData);
    };



  return (
    <>
    <Box
      component="section"
      sx={{
        fontFamily: "'Raleway', 'Open Sans', sans-serif",
        backgroundImage:
                  `url(${loginbg})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgba(0, 0, 0, 0.89)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0",
          padding: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
            borderRadius: "10px",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
              padding: "0px",
            }}
          >
            {/* Caption Section */}
            <Box
              sx={{
                backgroundColor: "#6A2B00",
                width: "40%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                padding: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  textTransform: "uppercase",
                  fontFamily: "comic Sans MS, 'Raleway', 'Open Sans', sans-serif",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                WRITE YOUR TRAVELS WITH JOURNAL JOT!
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                Already have an account?
              </Typography>
              <Button
                component={Link}
                to="/Loginpage"
                sx={{
                  textDecoration: "none",
                  color: "white",
                  border: "2px solid white",
                  borderRadius: "10px",
                  padding: "5px 20px",
                  textTransform: "uppercase",
                  "&:hover": {
                    color: "#471C01",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Log in
              </Button>
            </Box>

            {/* Signup Form Section */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                background:
                  "linear-gradient(to right, rgba(255, 255, 255, 0.815), rgba(223, 223, 223, 0.1))",
              }}
            >
              <img
                src={usericon}
                alt="User"
                height="150px"
                loading="lazy"
                style={{ marginBottom: "20px" }}
              />
              <Input
                name="username"
                type="text"
                placeholder="Full Name"
                value={formData.username}
                onChange={handleChange}
                disableUnderline
                sx={{
                  width: "100%",
                  height: "35px",
                  padding: "2px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  border: "1px solid #6A2B00",
                  backgroundColor: "#ffffffcb",
                  outline: "none",
                  "&:focus": {
                    border: "1px solid #6A2B00",
                    boxShadow: "0 0 5px rgba(137, 62, 21, 0.6)",
                  },
                }}
              />
              <Input
                name="email"
                type="email"
                placeholder="E-mail address"
                value={formData.email}
                onChange={handleChange}
                disableUnderline
                sx={{
                  width: "100%",
                  height: "35px",
                  padding: "2px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  border: "1px solid #6A2B00",
                  backgroundColor: "#ffffffcb",
                  outline: "none",
                  "&:focus": {
                    border: "1px solid #6A2B00",
                    boxShadow: "0 0 5px rgba(140, 60, 20, 0.6)",
                  },
                }}
              />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                disableUnderline
                sx={{
                  width: "100%",
                  height: "35px",
                  padding: "2px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  border: "1px solid #6A2B00",
                  backgroundColor: "#ffffffcb",
                  outline: "none",
                  "&:focus": {
                    border: "1px solid #6A2B00",
                    boxShadow: "0 0 5px rgba(147, 85, 23, 0.6)",
                  },
                }}
              />
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#6A2B00",
                  color: "white",
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  "&:hover": {
                    backgroundColor: "#471C01",
                  },
                }}
              >
                Start Journey
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default Signup