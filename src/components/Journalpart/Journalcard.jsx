import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Box } from '@mui/material';

const Journalcard = ({ title, body, travelPic, country, city, district }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px', boxShadow: 3 }}>
      {travelPic && (
        <CardMedia
          component="img"
          height="140"
          image={travelPic}
          alt="Travel Preview"
        />
      )}
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
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Read
        </Button>
        <Button size="small" variant="outlined" color="secondary">
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default Journalcard;