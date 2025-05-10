import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import bgimg from "../components/Images/sharda-deshmukh-IsoQqJjslUE-unsplash.jpg"

const NotFound = () => {
const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');}
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: `url(${bgimg})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: '#6A2B00' }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 2, color: 'black' }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ textTransform: 'uppercase', backgroundColor: "#6A2B00", color: "white", padding: '10px 20px' }}
        onClick={handleGoHome}
      >
        Go to Homepage
      </Button>
    </Box>
  )
}

export default NotFound