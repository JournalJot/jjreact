import React, { useEffect, useState } from 'react';
import { Box, AppBar, Toolbar, Button, Container, Grid, Typography, IconButton, Card, CardContent, CardMedia } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Journalcard from './Journalcard';
import backg from "../Images/sneha-sivarajan-K8Lh4OenP_E-unsplash.jpg"
import { Delete } from '@mui/icons-material';

const Journals = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState([
    {
      rowid: "",
      email: "",
      Journal_Body: "",
      Journal_Title: "",
      Travel_Pic: "",
      Country: "",
      City: "",
      District: "",
      Latitude: "",
      longitude: ""
    },
  ]);

  const onClick = () => {
    navigate("/Editdiarypage");
  };

  const fetchApi = async () => {
    try {
      const email = localStorage.getItem("email");
      if (!email) {
        console.error("No email found in localStorage");
        return;
      }

      const response = await axios.get(
        "https://journaljot-api.onrender.com/api/journal?email=" + email
      );

      const obj = response.data.journals
        .map((data) => ({
          rowid: data[0],
          email: data[1],
          Journal_Title: data[3],
          Journal_Body: data[2],
          Travel_Pic: data[4],
          Country: data[5],
          City: data[6],
          District: data[7],
          Latitude: data[8],
          longitude: data[9],
        }))
        .filter(
          (item) =>
            item.email && item.Journal_Title && item.Journal_Body  // Ensure necessary fields are not empty
        );

      console.log("Filtered Journals:", obj); // Debug the filtered data
      setFormData(obj); // Replace formData with the filtered array
    } catch (error) {
      console.error("Error fetching data:", error);
      setFormData([]); // Set to an empty array in case of an error
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  console.log("formData:", JSON.stringify(formData, null, 2));


  const DeleteJournal = async (rowid) => {
    if (!window.confirm("Are you sure you want to delete this journal?")) {
      return;
    }

    try {
      // Retrieve email from localStorage
      const email = localStorage.getItem("email");
      if (!email) {
        alert("No email found. Please log in again.");
        return;
      }

      const response = await axios.post(
        "https://journaljot-api.onrender.com/api/delete_journal",
        {
          rowid: rowid,
          email: email, // Pass the email to the backend
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Delete response:", response.data);

      // Update state directly instead of fetching data again
      setFormData((prevData) => prevData.filter((data) => data.rowid !== rowid));

      alert("Journal deleted successfully!");
    } catch (error) {
      console.error("Error deleting journal:", error);
      alert("Failed to delete the journal. Please try again.");
    }
  };

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
          {formData.length === 0 || formData.every((data) => !data.Journal_Title && !data.Journal_Body) ? (
            <Typography
        sx={{
          fontFamily: "'Raleway', 'Open Sans', Arial, sans-serif",
          width: { xs: "90%", sm: "80%", md: "70%" }, // Adjust width for different screen sizes
          fontSize: { xs: "20px", sm: "30px", md: "40px" }, // Responsive font size
          marginTop: { xs: "50px", md: "70px" }, // Adjust margin for different screen sizes
          height: { xs: "auto", md: "90px" }, // Adjust height for small screens
          padding: { xs: "10px", md: "0" }, // Add padding for better spacing on small screens
          color: "white",
          display: "flex",
          justifyContent: "center",
          justifySelf: "center",
          alignItems: "center",
          textAlign: "center", // Center-align the text for smaller screens
          borderRadius: "20px",
          background: "linear-gradient(to right, rgba(33, 33, 33, 0.4),  rgba(0, 0, 0, 0.7))",
          }}
        >
            No Journals created
          </Typography>
          ) : (
            <Grid container spacing={3} justifyContent="center">
              {formData
                .filter((data) => data.Journal_Title && data.Journal_Body) // Filter out invalid entries
                .map((data, index) => (
                  <Journalcard
                    key={index}
                    title={data.Journal_Title}
                    body={data.Journal_Body}
                    travelPic={data.Travel_Pic || null}
                    country={data.Country}
                    city={data.City}
                    district={data.District}
                    onDelete={() => {
                      const updatedData = formData.filter((_, i) => i !== index);
                      setFormData(updatedData);
                      DeleteJournal(data.rowid); // Call the delete function with the rowid
                    }}
                    onEdit={() => {
                      navigate("/Editdiarypage", { state: { data } }); // Pass the data to the edit page
                    }}
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