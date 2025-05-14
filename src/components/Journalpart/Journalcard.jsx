import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit'; // Import Edit Icon

const Journalcard = ({ title, body, travelPic, country, city, district, onDelete, onEdit, onReadMore }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 300, // Minimum width to fit 3 cards in a row
        minHeight: 400, // Minimum height for consistent card size
        margin: '20px',
        boxShadow: 3,
        position: 'relative',
        flex: '1 1 calc(33.33% - 40px)', // Flex property for 3 cards per row
        display: 'flex',
        flexDirection: 'column', // Ensure content stacks vertically
      }}
    >
      {/* Image Container with Fixed Height */}
      <Box sx={{ height: 140, backgroundColor: '#f0f0f0' }}>
        {travelPic && (
          <CardMedia
            component="img"
            height="140"
            image={travelPic}
            alt="Travel Preview"
          />
        )}
      </Box>
      {/* Delete Button */}
      <IconButton
        aria-label="delete"
        sx={{ position: 'absolute', top: 8, right: 8 }}
        onClick={onDelete}
      >
        <CloseIcon />
      </IconButton>
      {/* Edit Button */}
      <IconButton
        aria-label="edit"
        sx={{ position: 'absolute', top: 8, right: 48 }} // Position it next to the delete button
        onClick={onEdit}
      >
        <EditIcon />
      </IconButton>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            {country}, {city}, {district}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ marginTop: 'auto', padding: '16px' }}>
        <Button size="small" variant="contained" color="primary" onClick={onReadMore}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Journalcard;