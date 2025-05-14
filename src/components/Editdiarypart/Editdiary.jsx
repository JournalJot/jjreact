import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from "leaflet";
import cusicon from "./image.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the back arrow icon
import { Country, State, City } from 'country-state-city'; // Import from the package

axios.defaults.headers.common["Content-Type"] = "application/json";

const Editdiary = () => {
  const [markers, setMarkers] = useState({ lat: 48.88, lng: 2.355 });
  const mapRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [mode, setMode] = useState("create");
  const [initialState, setInitialState] = useState({});
  const [journals, setJournals] = useState({
    email: "",
    journal_title: "",
    journal_body: "",
    city: "",
    country: "",
    district: "",
    travel_pic: "",
    latitude: 48.88,
    longitude: 2.355,
  });

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch countries on component mount
    const fetchedCountries = Country.getAllCountries();
    setCountries(fetchedCountries);
  }, []);

  useEffect(() => {
    if (journals.country) {
      // Fetch states when a country is selected
      const fetchedStates = State.getStatesOfCountry(journals.country);
      setStates(fetchedStates);
    }
  }, [journals.country]);

  useEffect(() => {
    if (journals.district) {
      // Fetch cities when a state is selected
      const fetchedCities = City.getCitiesOfState(journals.country, journals.district);
      setCities(fetchedCities);
    }
  }, [journals.district]);

  const fetchLocation = async () => {
    try {
      const response = await axios.get("https://journaljot-api.onrender.com/api/location");
      const locationData = response.data.location || {};
      setJournals((prevState) => ({
        ...prevState,
        latitude: locationData.latitude ?? 48.88,
        longitude: locationData.longitude ?? 2.355,
        city: locationData.city || "",
        country: locationData.country_name || "",
        district: locationData.district || "",
      }));
      setMarkers({
        lat: locationData.latitude ?? 48.88,
        lng: locationData.longitude ?? 2.355,
      });
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    if (state) {
      setInitialState(() => ({
        rowid: state.data.rowid,
        email: state.data.email,
        journal_title: state.data.Journal_Title,
        journal_body: state.data.Journal_Body,
        city: state.data.City,
        country: state.data.Country,
        district: state.data.District,
        latitude: state.data.Latitude,
        longitude: state.data.longitude,
      }));
      setMode("edit");
    }
  }, [state]);

  const customIcon = new Icon({
    iconUrl: cusicon,
    iconSize: [38, 38],
  });

  const showMyLocattion = () => {
    if (mapRef.current) {
      mapRef.current.setView([journals.latitude, journals.longitude], 13, { animate: true });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (mode === "edit") {
      setInitialState((prevState) => ({
        ...prevState,
        email: localStorage.getItem("email"),
        travel_pic: "",
        [name]: value,
      }));
    } else {
      setJournals((prevState) => ({
        ...prevState,
        email: localStorage.getItem("email"),
        [name]: value,
      }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = mode === "edit"
        ? await axios.post("https://journaljot-api.onrender.com/api/edit_journal", initialState, {
            headers: { "Content-Type": "application/json" },
          })
        : await axios.post("https://journaljot-api.onrender.com/api/journal", journals, {
            headers: { "Content-Type": "application/json" },
          });
      navigate("/Journalspage");
    } catch (error) {
      console.error("Error submitting journal:", error);
    }
  };

  return (
    <section style={{ padding: "20px", margin: "100px" }}>
      <div style={{ marginBottom: "20px" }}>

      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/Journalspage")}
        style={{ marginBottom: "20px" }}
      >
        Back
      </Button>
        <TextField
          name="journal_title"
          label="Title"
          variant="outlined"
          fullWidth
          value={mode === "edit" && initialState ? initialState.journal_title : journals.journal_title}
          onChange={handleChange}
          style={{ marginBottom: "20px" }}
        />
        <TextField
          name="journal_body"
          label="Body"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={mode === "edit" && initialState ? initialState.journal_body : journals.journal_body}
          onChange={handleChange}
          style={{ marginBottom: "20px" }}
        />
        <FormControl fullWidth style={{ marginBottom: "20px" }}>
          <InputLabel>Country</InputLabel>
          <Select
            name="country"
            value={journals.country}
            onChange={(e) => {
              handleChange(e);
              setJournals((prevState) => ({
                ...prevState,
                district: "", // Reset state and city when country changes
                city: "",
              }));
            }}
          >
            {countries.map((country) => (
              <MenuItem key={country.isoCode} value={country.isoCode}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth style={{ marginBottom: "20px" }}>
          <InputLabel>State</InputLabel>
          <Select
            name="district"
            value={journals.district}
            onChange={(e) => {
              handleChange(e);
              setJournals((prevState) => ({
                ...prevState,
                city: "", // Reset city when state changes
              }));
            }}
          >
            {states.map((state) => (
              <MenuItem key={state.isoCode} value={state.isoCode}>
                {state.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth style={{ marginBottom: "20px" }}>
          <InputLabel>City</InputLabel>
          <Select
            name="city"
            value={journals.city}
            onChange={handleChange}
          >
            {cities.map((city) => (
              <MenuItem key={city.name} value={city.name}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          style={{ marginRight: "10px" }}
        >
          Submit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => mapRef.current.setView([journals.latitude, journals.longitude], 13)}
        >
          Find me
        </Button>
      </div>
      <div style={{ height: "400px", marginTop: "20px" }}>
        {(mode === "edit" && initialState.latitude && initialState.longitude) ||
        (journals.latitude && journals.longitude) ? (
          <MapContainer
            center={[
              mode === "edit" && initialState.latitude ? initialState.latitude : journals.latitude,
              mode === "edit" && initialState.longitude ? initialState.longitude : journals.longitude,
            ]}
            zoom={13}
            ref={mapRef}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"
            />
            <Marker
              position={[
                mode === "edit" && initialState.latitude ? initialState.latitude : journals.latitude,
                mode === "edit" && initialState.longitude ? initialState.longitude : journals.longitude,
              ]}
              icon={customIcon}
            />
          </MapContainer>
        ) : (
          <p>Loading map...</p>
        )}
      </div>
    </section>
  );
};

export default Editdiary;
