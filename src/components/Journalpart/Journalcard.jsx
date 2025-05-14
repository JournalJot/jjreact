import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Journalcard = ({ 
  title, 
  body, 
  travelPic, 
  country, 
  city, 
  district, 
  onDelete, 
  onEdit, 
  onReadMore, 
  onImageUpload 
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 300,
        minHeight: 400,
        margin: '20px',
        boxShadow: 3,
        position: 'relative',
        flex: '1 1 calc(33.33% - 40px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
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
      <IconButton
        aria-label="delete"
        sx={{ position: 'absolute', top: 8, right: 8 }}
        onClick={onDelete}
      >
        <CloseIcon />
      </IconButton>
      <IconButton
        aria-label="edit"
        sx={{ position: 'absolute', top: 8, right: 48 }}
        onClick={onEdit}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        aria-label="camera"
        sx={{ position: 'absolute', top: 8, right: 88 }}
        component="label"
      >
        <CameraAltIcon />
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={onImageUpload}
        />
      </IconButton>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body.substring(0, 25)}...
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            {country}, {city}, {district}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ marginTop: 'auto', padding: '16px' }}>
        <Button size="small" variant="contained" color="primary" onClick={onReadMore} sx={{ backgroundColor: "#4A2122" }}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Journalcard;