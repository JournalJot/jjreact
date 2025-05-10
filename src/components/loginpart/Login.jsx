import React, { useState,useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Container, Typography,Box, Button, Input } from '@mui/material';
import loginbg from "../Images/beautiful-wooden-pathway-going-breathtaking-colorful-trees-forest_181624-5840.jpg.avif"
import anim from "../Images/workspace-unscreen.gif"
import usericon from "../Images/user-octagon-svgrepo-com.png"
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  useEffect(() => {
    // Get the email from localStorage
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail); // Save it into the state
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()    
     const response = await axios.post('https://journaljot-api.onrender.com/api/login', formData,
        {
          headers: {"Content-Type": "application/json",}
        }
      );
      console.log(response.data);
      if (response.data.error_code == 200) {
        localStorage.setItem('email', formData.email);
        navigate('/Home');
      }
      else if (response.data.error_code == 404)  {
        alert("Invalid email or password. Please try again.");
      }


    
    console.log('Login form submitted:', formData);
  };

  return (
    <>
    <Box
      component="section"
      sx={{
        fontFamily: "'Raleway', 'Open Sans', sans-serif",
        backgroundImage:
          `url(${loginbg})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        width: '100%',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '500px',
            height: 'auto',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              height: '100%',
              transition: 'transform 0.6s ease-in-out',
            }}
          >
            <Box
              sx={{
                component: 'leftpart',
                backgroundColor: '#6A2B00',
                width: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                padding: '20px',
              }}
            >
              <img
                src={anim}
                alt="animation"
                loading="lazy"
                style={{ width: '100px', marginBottom: '10px' }}
              />
              <Typography
                component="p"
                sx={{
                  fontSize: '24px',
                  textTransform: 'uppercase',
                  fontFamily: "comic Sans MS, 'Raleway', 'Open Sans', sans-serif",
                  textAlign: 'center',
                  marginBottom: '20px',
                }}
              >
                WHERE TO NEXT?
              </Typography>
              <Button
                component="a"
                href="/Home"
                sx={{
                  border: '2px solid white',
                  padding: '5px 20px',
                  marginTop: '15px',
                  textDecoration: 'none',
                  color: 'white',
                  borderRadius: '10px',
                  textTransform: 'uppercase',
                  '&:hover': {
                    color: '#012558ec',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Home
              </Button>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                background:
                  'linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(223, 223, 223, 0.5))',
                backdropFilter: 'blur(10px)',
              }}
            >
              <img
                src={usericon}
                alt="User"
                height="150px"
                loading="lazy"
                style={{ display: 'block', maxWidth: '100%', marginBottom: '20px' }}
              />
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                disableUnderline
                sx={{
                  width: '100%',
                  height: '35px',
                  padding: '2px',
                  marginBottom: '10px',
                  borderRadius: '10px',
                  border: '1px solid #6A2B00',
                  backgroundColor: '#ffffffcb',
                  outline: 'none',
                  '&:focus': {
                    border: '1px solid #6A2B00',
                    boxShadow: '0 0 5px rgba(105, 43, 11, 1)',
                    transition: '0.55s ease-in-out',
                    outline: 'none',
                  },
                }}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                disableUnderline
                sx={{
                  width: '100%',
                  height: '35px',
                  padding: '2px',
                  marginBottom: '20px',
                  borderRadius: '10px',
                  border: '1px solid #6A2B00',
                  backgroundColor: '#ffffffcb',
                  outline: 'none',
                  '&:focus': {
                    border: '1px solid #6A2B00',
                    boxShadow: '0 0 5px rgba(105, 43, 11, 0.6)',
                    transition: '0.55s ease-in-out',
                  },
                  '&:focus-visible': {
                  outline: 'none',
                  },

                }}
              />
              <Button
                type="submit"
                sx={{
                  backgroundColor: '#6A2B00',
                  color: 'white',
                  padding: '10px 15px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  '&:hover': {
                    backgroundColor: '#471C01',
                  },
                }}
              >
                log in
              </Button>
              <Typography
                component="p"
                sx={{
                  paddingTop: '10px',
                  textAlign: 'center',
                  fontSize: '1rem',
                  marginTop: '20px',
                }}
              >
                Don't have an account? <br />
                <Link
                  to="/Signuppage"
                  style={{
                    color: '#6A2B00',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default Login;