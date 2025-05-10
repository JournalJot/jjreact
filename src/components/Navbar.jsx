import React from 'react'
import { AppBar,Toolbar, Box,Link} from '@mui/material'
import Logo from "../components/Images/New  Logo png.png"
import prof from "../components/Images/user-octagon-svgrepo-com.png"

const Navbar = () => {
  return (
    <>
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.7))',
        backdropFilter: 'blur(8px)',
        boxShadow: 'none',
        padding: '0 20px',
        height: '75px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Logo}
            alt="Journal Jot Logo"
            style={{ width: '45px' }}
          />
        </Box>

        {/* Links Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: '100%',
            
            gap: '0px',
          }}
        >
          <Link
            href = '/'
            underline="none"
            sx={{
              color: '#6A2B00',
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: '0px 20px',
              margin: '0',
            width: '100%',
              '&:hover': {
                color: 'white',
                bgcolor: '#6A2B00',
                transition: '0.3s ease-in-out',
              },
            }}
          >
            Home
          </Link>
          <Link
            href = '/Journalspage'
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              color: '#6A2B00',
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: '0px 20px',
              width: '100%',
              '&:hover': {
                color: 'white',
                bgcolor: '#6A2B00',
                transition: '0.3s ease-in-out',
              },
            }}
          >
            Journal
          </Link>
          <Link
            href="/ProfilePage"
            underline="none"
            sx={{
              color: '#6A2B00',
              textDecoration: 'none',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              padding: '0px 20px',
              height: '100%',
              width: '100%',
              fontWeight: 'bold',
              '&:hover': {
                color: 'white',
                bgcolor: '#6A2B00',
                transition: '0.3s ease-in-out',
              },
            }}
          >
            Account
          </Link>
          <Link
            href="#footer"
            underline="none"
            sx={{
              color: '#6A2B00',
              textDecoration: 'none',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              padding: '0px 20px',
              fontWeight: 'bold',
              height: '100%',
              width: '100%',
              '&:hover': {
                color: 'white',
                bgcolor: '#6A2B00',
                transition: '0.3s ease-in-out',
              },
            }}
          >
            About
          </Link>
          <Link
            href="/Loginpage"
            underline="none"
            sx={{
              fontSize: '20px',
              display: "flex",
              width: "40px",
              '&:hover': {
                color: '#6d3914',
                transition: '0.3s ease-in-out',
              },
            }}
            title="LOG IN"
          >
            <img src={prof} style={{width: "70px"}} />
          </Link>
        </Box>
      </Toolbar>
    </AppBar></>
  )
}

export default Navbar