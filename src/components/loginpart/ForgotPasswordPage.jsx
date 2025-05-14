import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // <-- Add this import

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const navigate = useNavigate(); // <-- Add this line

    // Function to handle sending the verification code
    const handleSendCode = () => {
        if (email) {
            axios.post('https://journaljot-api.onrender.com/api/forgot_password', { email })
                .then((response) => {
                    if (response.data.success) {
                        alert('Verification code sent to your email.');
                    } else {
                        alert('Failed to send verification code. Please try again.');
                    }
                })
                .catch((error) => {
                    console.error('Error sending verification code:', error);
                    alert('An error occurred. Please try again later.');
                });
        } else {
            alert('Please enter a valid email address.');
        }
    };

    const handleVerifyCode = () => {
        if (email && code) {
            axios.post('https://journaljot-api.onrender.com/api/verify_code', { email, code })
                .then((response) => {
                    if (response.data.error_code === 200) {
                        alert('Code verified successfully!');
                        navigate('/PasswordResetPage', { state: { email } }); // <-- Redirect after verification
                    } else {
                        alert('Invalid code. Please try again.');
                    }
                })
                .catch((error) => {
                    console.error('Error verifying code:', error);
                    alert('An error occurred. Please try again later.');
                });
        } else {
            alert('Please enter both your email and the verification code.');
        }
    };

    useEffect(() => {
        if (code.length === 6) {
            handleVerifyCode();
        }
    }, [code]); 

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt={12}
        >
            <Typography variant="h4" gutterBottom>
                Forgot Password
            </Typography>
            <TextField
                type="email"
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2, width: 300 }}
            />
            <TextField
                type="text"
                label="Verification Code"
                variant="outlined"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                sx={{ mb: 2, width: 300 }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSendCode}
                sx={{ width: 150 }}
            >
                Send Code
            </Button>
        </Box>
    );
};

export default ForgotPasswordPage;