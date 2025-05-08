import React, { useEffect, useState } from 'react';
import { Box, AppBar, Toolbar, Button, Container, Grid, Typography, IconButton, Card, CardContent, CardMedia } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Journalcard from './Journalcard';
import backg from "../Images/sneha-sivarajan-K8Lh4OenP_E-unsplash.jpg"

const Journals = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState([
    {
      email: "",
      Journal_Body: "",
      Journal_Title: "",
      Travel_Pic: "",
      Country: "",
      City: "",
      District: "",
      Latitude: "",
    },
  ]);

  const onClick = () => {
    navigate("/Editdiarypage");
  };

  const fetchApi = async () => {
    const response = await axios.get("https://journaljot-api.onrender.com/api/journal");
    setFormData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <Box sx={{ minHeight: '100vh', backgroundImage: `url(${backg})`, backgroundSize: 'cover', margin: "0", backgroundAttachment: 'fixed', fontFamily: 'Raleway, Open Sans, Arial, sans-serif' }}>

        {/* Main Section */}
        <Container sx={{ padding: '20px', paddingTop: "120px", textAlign: 'center' }}>
          {/* Create Button */}
          

          {/* Filter Button */}
          <Box sx={{ marginBottom: '20px' }}>
            <Button 
              variant="contained" 
              startIcon={<FilterListIcon />} 
              sx={{ backgroundColor: '#444', color: 'white', borderRadius: '5px', fontSize: '1rem', '&:hover': { backgroundColor: '#555' } }}>
              Filter ▼
            </Button>
          </Box>
          
          {/* Cards Container */}
          {/* If statement for when journals arent created and when they are created  */}
          {formData.length === 0 || formData.every(data => data.Journal_Body === "") ? (
            <Typography sx={{ fontFamily:" 'Raleway', 'Open Sans', Arial, sans-serif", width: "70%", fontSize: "40px", marginTop: "70px", height: "90px",  color: "white", display: "flex", justifySelf: "center", justifyContent: "center", alignItems:"center", borderRadius: "20px", background: "linear-gradient(to right, rgba(33, 33, 33, 0.4),  rgba(0, 0, 0, 0.7))" }}>
              No Journals created
            </Typography>
          ) : (
            <Grid container spacing={3} justifyContent="center">
              {formData.map((data, index) => (
                <Journalcard
                  key={index}
                  title={data.Journal_Title}
                  body={data.Journal_Body}
                  travelPic={data.Travel_Pic}
                  country={data.Country}
                  city={data.City}
                  district={data.District}
                />
              ))}
            </Grid>
          )}
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ fontWeight: 'bold', py: 1, px: 4, borderRadius: 1, marginTop: "10px", '&:hover': { backgroundColor: 'blue' }, transition: '0.3s' }} 
            onClick={onClick}>
            Create
          </Button>
          
        </Container>
      </Box>
    </>
  );
};

export default Journals;