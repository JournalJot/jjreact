import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom'; // <-- Add this import

const PasswordResetPage = () => {
    const location = useLocation(); // <-- Get location object
    const email = location.state?.email || ''; // <-- Get email from state

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your password reset logic here
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        if (newPassword.length < 8) {
            alert('Password must be at least 8 characters long!');
            return;
        }
        // Simulate a password reset API call
        axios.post('https://journaljot-api.onrender.com/api/change_password', ({ email, new_password: newPassword }))
            .then(response => {
                if (response.data.error_code === 200) {
                    alert('Password reset successfully!');
                } else {
                    alert('Failed to reset password. Please try again.');
                }
            }
        ).catch(error => {
            console.error('Error resetting password:', error);
            alert('An error occurred. Please try again later.');
        });
        alert(`Password reset submitted for ${email}!`);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt={8}
            component="form"
            onSubmit={handleSubmit}
        >
            <Typography variant="h4" gutterBottom>
                Reset Password
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                {email && `Resetting password for: ${email}`}
            </Typography>
            <TextField
                type="password"
                label="New Password"
                variant="outlined"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                sx={{ mb: 2, width: 300 }}
                required
            />
            <TextField
                type="password"
                label="Confirm Password"
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                sx={{ mb: 2, width: 300 }}
                required
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: 150 }}
            >
                Submit
            </Button>
        </Box>
    );
};

export default PasswordResetPage;