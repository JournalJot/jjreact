import React, { useEffect, useState } from 'react'
import Logo from '../Images/New Logo svg.svg'
import Logow from '../Images/Logosignup.png'
import Img1 from '../Images/WRITE YOUR TRAVELS.png'
import Img2 from '../Images/that-s-her-business-R4sP8_Bq0Bw-unsplash.jpg'
import Img3 from '../Images/redd-francisco-wtZ5QoTEI88-unsplash.jpg'
import Img4 from '../Images/logo bigger.png'
import Img5 from '../Images/Logo transpa.png'
import Img6 from '../Images/logo final.png'
import Img7 from '../Images/logo bigger.png'
import Img8 from '../Images/logo final svg.svg'
import Img10 from '../Images/angelo-moleele-s2WxsnxeRc4-unsplash.jpg'
import Img0 from '../Images/photo-1691322682852-6f3b5421d2fa.avif'
import { Box,Link, Typography, List, Grid, ListItem,ListItemText,} from '@mui/material'
import Reviews from './Reviews'

const Homecode = () => {
      const [email, setEmail] = useState('');
      useEffect(() => {
              const storedEmail = localStorage.getItem('email');
          if (storedEmail) {
            setEmail(storedEmail); // Save it into the state
            
          }}, [])

  return (
    <>
    <Box>
      {/* Background Image */}
      <Box
        component="img"
        src={Img2}
        alt="bg"
        sx={{
          maxHeight: '70vh',
          width: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Slogan Section */}
      <Box
        className="slogan"
        sx={{
          position: 'absolute',
          top: { xs: '300px', sm: '350px', md: '390px' },
          left: { xs: '10px', sm: '20px' },
        }}
      >
        <img
          src={Img1}
          alt="slogan"
          className="protected"
          width="250px"
          height="100px"
          loading="lazy"
        />
      </Box>

      {/* Sections */}
      <Box>
        {/* Name Section */}
       <Box sx={{width: "95%", paddingLeft: "20px" }}>
  {/* Name Section */}
  <Typography
    className="name"
    variant="h3"
    sx={{
      textAlign: 'center',
      paddingTop: '60px',
      letterSpacing: {xs: '10px' ,sm: '30px', md: '45px'},
      fontFamily: '"Dancing Script"',
      fontSize: { xs: '20px', sm: '24px' },
    }}
  >
    JournalJot
  </Typography>

  {/* Get Started Section */}
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      padding: { xs: '0 10px', sm: '0 20px' },
      alignItems: 'center',
      marginTop: '50px',
      gap: '20px', // Space between items
    }}
  >
    {/* Text Section */}
    <Box
      className="about"
      sx={{
        flex: 1,
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: '20px', sm: '24px' },
        }}
      >
        Start your travel journal adventure!
      </Typography>
      <Typography
        sx={{
          paddingTop: '10px',
          lineHeight: '1.8',
          fontSize: { xs: '14px', sm: '16px' },
        }}
      >
        Journal Jot is a digital travel diary that lets you capture your adventures with stories, photos, and maps—all in one place...
      </Typography>
      <Link
        href="#"
        sx={{
          color: '#0069ff',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
        Learn more
      </Link>
    </Box>

    {/* Image Section */}
    <Box
      className="aboutimg"
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={Img10}
        alt="about-img"
        loading="lazy"
        style={{
          borderRadius: '20px',
          width: '100%',
          height: '250px',
          objectFit: 'cover',
        }}
      />
    </Box>
  </Box>
</Box>

        {/* Create Section */}
        <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    margin: { xs: '20px 10px', sm: '40px 20px', md: '40px 60px' },
    alignItems: 'stretch',
    borderRadius: '2rem',
    overflow: 'hidden',
    height: { md: '340px' }, // Matches the height from the original
  }}
>
  {/* Text Section */}
  <Box
    className="createbox"
    sx={{
      flex: 1,
      padding: { xs: '10px', sm: '20px' },
      backgroundColor: '#4A2102',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      borderRadius: { xs: '2rem 2rem 0 0', md: '2rem 0 0 2rem' },
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontSize: { xs: '18px', sm: '24px' },
      }}
    >
      Transform your adventure into a travel book
    </Typography>
    <Typography
      sx={{
        paddingTop: '20px',
        lineHeight: '1.7',
        fontSize: { xs: '14px', sm: '16px' },
      }}
    >
      Just returned from your travels? Turn your favorite memories into a stunning printed keepsake with Journal Jot...
    </Typography>
    <Link
      href="#"
      sx={{
        color: 'white',
        fontWeight: 'bold',
        textDecoration: 'none',
        fontSize: { xs: '16px', sm: '18px' },
        marginTop: '10px',
      }}
    >
      NEW +
    </Link>
  </Box>

  {/* Image Section */}
  <Box
    className="createimg"
    sx={{
      flex: 1,
      height: { xs: '200px', md: '100%' },
      borderRadius: { xs: '0 0 2rem 2rem', md: '0 2rem 2rem 0' },
      overflow: 'hidden',
    }}
  >
    <img
      src={Img3}
      alt="create-img"
      loading="lazy"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  </Box>
</Box>

        {/* Join Section */}
        <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    margin: '0px 10px',
    alignItems: 'stretch',
    backgroundColor: '#4A2102',
    borderRadius: '2rem',
    color: 'white',
    width: "90%",
    padding: { xs: '20px', sm: '30px' },
  }}
>
  {/* Text Section */}
  <Box
    className="join-txt"
    sx={{
      flex: 1,
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontSize: { xs: '20px', sm: '24px' },
      }}
    >
      Join us today
    </Typography>
    {[
      'Craft your memories seamlessly using our intuitive online editor...',
      'Bring your adventures to life by uploading photos...',
      'Tailor every detail with customizable fonts...',
      'Enrich your narrative by adding dynamic maps...',
    ].map((item, idx) => (
      <Typography
        key={idx}
        sx={{
          lineHeight: '1.8',
          marginBottom: '10px',
          fontSize: { xs: '14px', sm: '16px' },
        }}
      >
        🌍 {item}
      </Typography>
    ))}
    <Link
      href="/Signuppage"
      sx={{
        textDecoration: 'none',
        textTransform: 'uppercase',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px',
        height: '40px',
        padding: '5px',
        marginTop: '20px',
        borderRadius: '15px',
        color: '#4A2102',
        backgroundColor: 'white',
        fontWeight: 'bold',
        display: 'flex',
        '&:hover': {
          color: 'white',
          backgroundColor: '#4A2102',
          transition: '0.3s ease-in-out',
        },
      }}
    >
      Sign up
    </Link>
  </Box>

  {/* Image Section */}
  <Box
    sx={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <img
      src={Logow}
      alt="Journal Jot logo"
      loading="lazy"
      style={{
        width: '70%',
      }}
    />
  </Box>
</Box>
      </Box>

      <Reviews />
      {/* Footer */}
      <Box
  component="footer"
  sx={{
    backgroundColor: 'black',
    color: '#ecf0f1',
    padding: '40px 0 0',
    fontFamily: "'Raleway', 'Open Sans', sans-serif",
  }}
>
  {/* Footer Container */}
  <Box
    className="footer-container"
    sx={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      padding: '0 20px',
    }}
  >
    {/* Logo Section */}
    <Box className="footer-logo" sx={{ flex: '1 1 100%' }}>
      <img
        src={Logo}
        alt="Journal Jot Logo"
        width="100px"
        loading="lazy"
        style={{ marginBottom: '15px' }}
      />
      <Typography
        sx={{
          fontStyle: 'italic',
          color: '#bdc3c7',
          lineHeight: 1.6,
        }}
      >
        Write Your Travels, Relive the Moments
      </Typography>
    </Box>

    {/* Links Section */}
    <Box
      className="footer-links"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '70px',
        width: '100%',
      }}
    >
      {/* Navigation Links */}
      <Box className="link-group" sx={{ flex: '1 1 auto' }}>
        <Typography
          variant="h6"
          sx={{
            color: '#f1c40f',
            marginBottom: '20px',
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Navigation
        </Typography>
        <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
          {['Home', 'Journals', 'Account', 'Contact', 'Profile'].map((item, idx) => (
            <Box component="li" key={idx} sx={{ marginBottom: '10px' }}>
              <Link
                href={
                  item === 'Journals'
                    ? 'Travel-Gallery/gallery.html'
                    : item === 'Account'
                    ? 'Login Page/account.html'
                    : item === 'Profile'
                    ? 'ProfilePage/profile.html'
                    : '#'
                }
                sx={{
                  color: '#ecf0f1',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#f1c40f',
                  },
                }}
              >
                {item}
              </Link>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Resources Links */}
      <Box className="link-group" sx={{ flex: '1 1 auto' }}>
        <Typography
          variant="h6"
          sx={{
            color: '#f1c40f',
            marginBottom: '20px',
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Resources
        </Typography>
        <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
          {['Travel Tips', 'Packing Lists', 'Destination Guides'].map((item, idx) => (
            <Box component="li" key={idx} sx={{ marginBottom: '10px' }}>
              <Link
                href="#"
                sx={{
                  color: '#ecf0f1',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#f1c40f',
                  },
                }}
              >
                {item}
              </Link>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Connect Links */}
      <Box className="link-group" sx={{ flex: '1 1 auto' }}>
        <Typography
          variant="h6"
          sx={{
            color: '#f1c40f',
            marginBottom: '20px',
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Connect
        </Typography>
        <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
          {[
            { name: 'Instagram', icon: 'bx bxl-instagram' },
            { name: 'Facebook', icon: 'bx bxl-facebook' },
            { name: 'Twitter', icon: 'bx bxl-twitter' },
            { name: 'Pinterest', icon: 'bx bxl-pinterest' },
          ].map((item, idx) => (
            <Box component="li" key={idx} sx={{ marginBottom: '10px' }}>
              <Link
                href="#"
                sx={{
                  color: '#ecf0f1',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    color: '#f1c40f',
                  },
                }}
              >
                <i className={item.icon} style={{ marginRight: '8px', fontSize: '1.1rem' }}></i>
                {item.name}
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>

  {/* Footer Bottom */}
  <Box
    className="footer-bottom"
    sx={{
      backgroundColor: '#1a252f',
      padding: '20px 0',
      textAlign: 'center',
      marginTop: '40px',
    }}
  >
    <Typography
      sx={{
        margin: 0,
        color: '#bdc3c7',
        fontSize: '0.9rem',
      }}
    >
      &copy; 2025 JournalJot. All rights reserved. |{' '}
      <Link
        href="#"
        sx={{
          color: '#f1c40f',
          textDecoration: 'none',
        }}
      >
        Privacy Policy
      </Link>{' '}
      |{' '}
      <Link
        href="#"
        sx={{
          color: '#f1c40f',
          textDecoration: 'none',
        }}
      >
        Terms of Service
      </Link>
    </Typography>
  </Box>
</Box>
    </Box>
    
    
    </>
  )
}

export default Homecode