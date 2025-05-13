import React, {useState} from 'react'
import { AppBar,Toolbar,Box,Link,IconButton,Drawer,List,ListItem,ListItemText,useMediaQuery}
 from '@mui/material'
import Logo from "../components/Images/New  Logo png.png"
import prof from "../components/Images/user-octagon-svgrepo-com.png"
import MenuIcon from '@mui/icons-material/Menu';



const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/Journalspage', label: 'Journal', target: '_blank', rel: 'noopener noreferrer' },
    { href: '/ProfilePage', label: 'Account' },
    { href: '#footer', label: 'About' },
  ];

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
        fontFamily: "'Raleway', 'Open Sans', sans-serif",
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

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List
                sx={{
                  width: 250,
                  padding: '0px 0px',
                  fontFamily: "'Raleway', 'Open Sans', sans-serif",
                }}
              >
                {navLinks.map((link, index) => (
                  <ListItem button key={index} component="a" href={link.href} target={link.target} rel={link.rel} sx={{width: "100%", height: "40%", padding: "0px 0px"}}>
                    <ListItemText
                      primary={link.label}
                      sx={{
                        textTransform: 'uppercase',
                        height: "100%",
                        fontWeight: 'bold',
                        padding: "0px",
                        color: '#6A2B00',
                        textAlign: "center",
                        '&:hover': { transition: '0.3s ease-in-out' },
                      }}
                    />
                  </ListItem>

                ))}
                <ListItem button component="a" href="/loginPage" sx={{width: "100%", padding: "0px 0px", height: "40%",}}>
                  <ListItemText
                    primary="Log Out"
                    sx={{
                      textTransform: 'uppercase',
                        height: "100%",
                        fontWeight: 'bold',
                        padding: "0px",
                        color: '#6A2B00',
                        textAlign: "center",
                      '&:hover': {transition: '0.3s ease-in-out' },
                    }}
                  />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              height: '100%',
              gap: '0px',
            }}
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                underline="none"
                target={link.target}
                rel={link.rel}
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
                {link.label}
              </Link>
            ))}
            <Link
              href="/Loginpage"
              underline="none"
              sx={{
                fontSize: '20px',
                display: 'flex',
                width: '40px',
                '&:hover': {
                  color: '#6d3914',
                  transition: '0.3s ease-in-out',
                },
              }}
              title="LOG IN"
            >
              <img src={prof} style={{ width: '70px' }} />
            </Link>
          </Box>
        )}
      </Toolbar>
    </AppBar></>
  )
}

export default Navbar