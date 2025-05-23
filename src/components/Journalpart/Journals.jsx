import React, { useEffect, useState } from 'react';
import { Box, AppBar, Toolbar, Button, Container, Grid, Typography, IconButton, Card, CardContent, CardMedia, TextField, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Journalcard from './Journalcard';
import backg from "../Images/sneha-sivarajan-K8Lh4OenP_E-unsplash.jpg";

const Journals = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState([]);
  const [selectedJournal, setSelectedJournal] = useState(null); // State for selected journal
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

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

      const obj = response.data.journals.map((data) => ({
        rowid: data.rowid,
        email: data.email,
        Journal_Title: data.journal_title,
        Journal_Body: data.journal_body,
        Travel_Pic: data.travel_pic,
        Country: data.country,
        City: data.city,
        District: data.district,
        Latitude: data.latitude,
        longitude: data.longitude,
      }));

      setFormData(obj);
    } catch (error) {
      console.error("Error fetching data:", error);
      setFormData([]);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleImageUpload = async (event, journal) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("rowid", journal.rowid);
  formData.append("email", journal.email);
  formData.append("travel_pic", file);

  // Debugging: Log FormData contents
  for (let pair of formData.entries()) {
    console.log(`${pair[0]}:`, pair[1]);
  }

  try {
    const response = await axios.post(
      "https://journaljot-api.onrender.com/api/journal_image",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    console.log("Image uploaded successfully:", response.data);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

  const filteredData = formData.filter(
    (data) =>
      data.Journal_Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.Journal_Body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openModal = (journal) => {
    console.log("Opening modal for:", journal);
    setSelectedJournal(journal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJournal(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${backg})`,
          backgroundSize: "cover",
          margin: "0",
          backgroundAttachment: "fixed",
          fontFamily: "Raleway, Open Sans, Arial, sans-serif",
        }}
      >
        <Container sx={{ padding: "20px", paddingTop: "120px", textAlign: "center" }}>
          <Box sx={{ marginBottom: "20px" }}>
            <TextField
              variant="outlined"
              placeholder="Search Journals..."
              fullWidth
              value={searchQuery}
              onChange={handleSearch}
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#888",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#555",
                  },
                },
              }}
            />
          </Box>

          {formData.length === 0 ? (
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
              {filteredData.map((data, index) => (
                <Journalcard
                  key={index}
                  rowid={data.rowid}
                  email={data.email}
                  title={data.Journal_Title}
                  body={data.Journal_Body}
                  travelPic={data.Travel_Pic || null}
                  country={data.Country}
                  city={data.City}
                  district={data.District}
                  onReadMore={() => openModal(data)} // Open modal on "Read More"
                  onDelete={() => {
                    (async () => {
                      try {
                        await axios.post("https://journaljot-api.onrender.com/api/delete_journal", {
                          rowid: data.rowid,
                          email: data.email,
                        });
                        console.log("Deleted journal with ID:", data.rowid);
              
                        // Update the formData state to remove the deleted journal
                        setFormData((prevData) => prevData.filter((item) => item.rowid !== data.rowid));
                      } catch (error) {
                        console.error("Error deleting journal:", error);
                      }
                    })();
                  }}
                  onEdit={() => {
                    navigate("/Editdiarypage", {state: { data } });
                    console.log("Edit journal with ID:", data.rowid);
                  }}
                  onImageUpload={(e) => handleImageUpload(e, data)}
                />
              ))}
            </Grid>
          )}

          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: "bold",
              py: 1,
              px: 4,
              backgroundColor: "#4A2102",
              borderRadius: 1,
              marginTop: "10px",
              "&:hover": { backgroundColor: "#4A2122", },
              transition: "0.3s",
            }}
            onClick={onClick}
          >
            Create
          </Button>
        </Container>
      </Box>

      {/* Modal for expanded journal */}
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "80%",
            maxHeight: "80%",
            overflowY: "auto",
            boxShadow: 24,
          }}
        >
          {selectedJournal && (
            <>
              <Typography variant="h4" gutterBottom>
                {selectedJournal.Journal_Title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedJournal.Journal_Body}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Location: {selectedJournal.City}, {selectedJournal.District}, {selectedJournal.Country}
              </Typography>
              {selectedJournal.Travel_Pic && (
                <img
                  src={selectedJournal.Travel_Pic}
                  alt="Travel"
                  style={{ width: "100%", marginTop: "20px", borderRadius: "10px" }}
                />
              )}
              <Button
                variant="contained"
                color="secondary"
                onClick={closeModal}
                sx={{ marginTop: "20px" }}
              >
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Journals;
