import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Input, Typography, TextField } from '@mui/material';
import bgimg from "../Images/sandcastle.jpg"


const Profile = () => {

    const [userData, setUserData] = useState({});
    const [message, setMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [formData, setFormData] = useState({username: '',
        email: '',
        password: ''});
    const [email, setEmail] = useState('');

    console.log(message);
    
    const fetchUserData = async (userEmail) => {
    if (userEmail.length === 0) {
      console.error("No email found in localStorage.");
      return;
    }

    try {
      const response = await axios.get(`https://journaljot-api.onrender.com/api/user?email=${userEmail}`);
      const data = response.data;
      console.log("User data fetched:", data);

      setUserData(data.user);
      setFormData({
        username: data.user.name || '',
        email: data.user.email || '',
        password: '' // Do not pre-fill password for security reasons

      });

      // Handle profile_pic as data URL or base64 string
      if (data.user.profile_pic) {
          setPreviewUrl(data.user.profile_pic);
      } else {
        setPreviewUrl('');
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
};

    useEffect(() => {
    // Get email from localStorage once on mount
    const storedEmail = localStorage.getItem('email');

    
    if (storedEmail) {
        setEmail(storedEmail);
        console.log(storedEmail);
        fetchUserData(storedEmail);
    } else {
        console.error("No email found in localStorage.");
    }
}, []); 


    


    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object for multipart/form-data
        const multipartForm = new FormData();
        multipartForm.append('name', formData.username);
        multipartForm.append('email', formData.email);
        multipartForm.append('password', formData.password);

        // If a new profile picture is selected, append it
        if (selectedFile) {
            multipartForm.append('profile_pic', selectedFile);
        }

        try {
            const response = await axios.post(
                'https://journaljot-api.onrender.com/api/user',
                multipartForm,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Profile update failed");
        }
        console.log("Form submitted:", formData);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setMessage("Please select a file first");
            return;
        }

        const formData = new FormData();
        formData.append('email', email); // Use the email from state
        formData.append('profile_pic', selectedFile);

        try {
            const response = await axios.post(
                `https://journaljot-api.onrender.com/api/profile_image`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.error || "Upload failed");
        } };


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Only allow JPEG images
        if (file.type !== "image/jpeg" && file.type !== "image/jpg") {
            setMessage("Only JPEG images are allowed.");
            setSelectedFile(null);
            return;
        }

        setSelectedFile(file);

        // Create preview URL
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    }

   const handleDeleteAccount = async () => {
  // Confirm before deleting the account
  const isConfirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
  if (!isConfirmed) return;

  try {
    console.log("Deleting user with email:", email); // Debug log
    const response = await axios.post("https://journaljot-api.onrender.com/api/delete_user", {
      email: email // Use the state `email` directly
    });

    setMessage("Account deleted successfully!");
    console.log(response.data.message);

    // Clear localStorage and state
    localStorage.removeItem('email'); // Clear email from localStorage
    setUserData({});
    setFormData({ username: '', email: '', password: '' });
    setPreviewUrl('');
    setEmail('');
  } catch (error) {
    if (error.response) {
      console.error("Backend error:", error.response.data); // Log backend error response
      setMessage(error.response.data.error || "Failed to delete account");
    } else {
      console.error("Network error:", error.message); // Log network errors
      setMessage("Network error. Please try again.");
    }
  }
};
    

    return (
        <> 
        <Box
      className="wcontainer"
      sx={{
        fontFamily: "'Raleway', 'Open Sans', sans-serif",
        backgroundImage: `url(${bgimg})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        margin: 0,
        scrollBehavior: 'smooth',
        backgroundColor: 'rgba(0, 0, 0, 0.89)',
        height: '100%',
        width: '100%',
      }}
    >

      <Box
        className="profile"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: "80px"
        }}
      >
        <Box
          className="container"
          sx={{
            display: 'flex',
            padding: '50px',
            height: 'auto',
            width: { xs: '85%', sm: '50%' },
            gap: '100px',
            backgroundColor: 'rgba(0, 0, 0, 0.527)',
            color: 'white',
            borderRadius: '50px',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          {/* Profile Image Section */}
          <Box className="profileuserimage" sx={{ display: 'block', textAlign: 'center', width: '200px', borderRadius: "50px" }}>
            {previewUrl ? ( 
             <Box sx={{borderRadius: "50%"}}> <img src={previewUrl} alt="acc" style={{width: "100px", height: '100px', objectFit: "cover", borderRadius: "50%"}} />
            </Box> ) : (
              <Box sx={{ color: 'white', fontSize: '14px', marginBottom: '10px' }}>No image selected</Box>
            )}
            <br />
            <Input
              type="file"
              id="profileUpload"
              accept="image/jpeg"
              onChange={handleFileChange}
              sx={{
                display: 'block',
                margin: '10px auto',
                width: '80%',
                height: '40px',
                backgroundColor: 'none',
                borderRadius: '5px',
              }}
            />
            <Button
              onClick={handleUpload}
              className="uploadButton"
              sx={{
                width: '130px',
                height: '40px',
                borderRadius: '10px',
                textTransform: 'uppercase',
                margin: '10px auto',
                backgroundColor: 'transparent',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'brown',
                  color: 'white',
                },
              }}
            >
              Upload Image
            </Button>
          </Box>

          {/* User Details Section */}
          <Box className="userdetails" sx={{ flex: 1 }}>
            <form onSubmit={handleSubmit}>
              {/* Username */}
              <Box sx={{ marginBottom: '20px' }}>
                <Typography
                  component="label"
                  sx={{
                    textTransform: 'uppercase',
                    color: 'white',
                    display: 'block',
                  }}
                >
                  Username
                </Typography>
                <TextField
                  name="username"
                  type="text"
                  placeholder="username"
                  autoComplete="off"
                  value={formData.username}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  sx={{
                    marginTop: '10px',
                    borderRadius: '10px',
                    backgroundColor: 'white',
                  }}
                />
              </Box>

              {/* Email */}
              <Box sx={{ marginBottom: '20px' }}>
                <Typography
                  component="label"
                  sx={{
                    textTransform: 'uppercase',
                    color: 'white',
                    display: 'block',
                  }}
                >
                  Email
                </Typography>
                <TextField
                  name="email"
                  type="email"
                  placeholder="email"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  sx={{
                    marginTop: '10px',
                    borderRadius: '10px',
                    backgroundColor: 'white',
                  }}
                />
                <a
                  href="#"
                  className="change"
                  style={{
                    marginLeft: '85%',
                    color: 'cyan',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    fontSize: '10px',
                    fontWeight: 'bold',
                  }}
                >
                  Update
                </a>
              </Box>

              {/* Password */}
              <Box sx={{ marginBottom: '20px' }}>
                <Typography
                  component="label"
                  sx={{
                    textTransform: 'uppercase',
                    color: 'white',
                    display: 'block',
                  }}
                >
                  Password
                </Typography>
                <TextField
                  name="password"
                  type="password"
                  placeholder="password"
                  value={ formData.password}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  sx={{
                    marginTop: '10px',
                    borderRadius: '10px',
                    backgroundColor: 'white',
                  }}
                />
                <a
                  href="#"
                  className="change"
                  style={{
                    marginLeft: '85%',
                    color: 'cyan',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    fontSize: '10px',
                    fontWeight: 'bold',
                  }}
                >
                  Update
                </a>
              </Box>

              {/* Account Deletion */}
              <Box className="accountdeletion" sx={{ marginBottom: '20px' }}>
                <Button onClick={handleDeleteAccount}
                 sx={{backgroundColor: "none", color: "cyan", border: "0", height: "20px", fontSize: "15px" }}
                >
                  Delete Account
                </Button>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: 'white',
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  Confirmation email will be sent to finalize the deletion of your account
                </Typography>
              </Box>

              {/* Buttons */}
              <Box
                className="buttons"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '10px',
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <Button
                  type="button"
                  id="Xe"
                  sx={{
                    textTransform: 'uppercase',
                    padding: '10px',
                    borderRadius: '15px',
                    border: '1px solid white',
                    backgroundColor: 'transparent',
                    color: 'white',
                    width: { xs: '100%', sm: '30%' },
                    '&:hover': {
                    color: 'black',
                    backgroundColor: 'white',
                  },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  id="sve"
                  sx={{
                    textTransform: 'uppercase',
                    padding: '10px',
                    borderRadius: '15px',
                    border: 'none',
                    backgroundColor: 'white',
                    color: 'black',
                    width: { xs: '100%', sm: '30%' },
                    '&:hover': {
                    color: 'white',
                    backgroundColor: 'black'
                  },
                  }}
                >
                  Save
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
        </>
    );
};

export default Profile;