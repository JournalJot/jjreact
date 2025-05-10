import React, { useEffect, useRef, useState } from 'react'
import classes from './Editdiary.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Images/logo bigger.png'
import {Icon} from "leaflet";
import cusicon from "./image.png"

import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import useGeoLocation from './useGeoLocation'
import axios from 'axios';

axios.defaults.headers.common["Content-Type"] = "application/json";

const Editdiary = () => {
    var [markers, setMarkers] = useState({lat: 48.88, lng:2.355})
    const mapRef = useRef();
    const [message, setMessage] = useState("Error");
    const navigate = useNavigate();



    const[journals, setJournals] = useState({
    email: "",
    journal_title: "",
    journal_body: "",
    city: "",
    country: "",
    district: "",
    travel_pic: "",
    latitude: 48.88,
        longitude: 2.355
    })
    const fetchLocation = async () => {
        try{
            const response = await axios.get("https://journaljot-api.onrender.com/api/location");
            console.log(response.data);
            
          setJournals((prevState) => ({
            ...prevState,
                latitude: response.data.location.latitude,
                longitude: response.data.location.longitude,
                city: response.data.location.city,
                country: response.data.location.country_name,
                district: response.data.location.district,
            }));
            setMarkers({lat: response.data.location.latitude, lng: response.data.location.longitude})
            console.log(response.data.location.longitude)
            console.log(response.data.location.latitude)
        } catch {
            console.log("error")
        }
    }
    // const fetchApi = async () => {
    //     try{
    //     const response = await axios.get("https://journaljot-api.onrender.com/api/journal")

    //     setJournals(response.data);
    //     console.log(response.data);
    //     } catch(error){
    //         console.log(error)
    //     }
    // }


    useEffect(() => {
        // fetchApi();
        fetchLocation();
        
    },[])

    const customIcon = new Icon({
        // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
        iconUrl: cusicon,
        iconSize: [38, 38] // size of the icon
      });
    
    //imported function for find my location
const location = useGeoLocation();

//function to fly to to my location
const showMyLocattion = () => {
        mapRef.current.leafletElement.flyTo([journals.latitude,journals.longitude], 13, {animate: true});

}

  const handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value from the event
    setJournals((prevState) => ({
      ...prevState,
      email: localStorage.getItem("email"),
      [name]: value, // Dynamically update the field
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
        console.log("Journals:",JSON.stringify(journals));
        try{
        const response = await axios.post(
            "https://journaljot-api.onrender.com/api/journal",
            journals,
            {
        headers: {
          "Content-Type": "application/json",
        },
            }
        );
        console.log("Response:", response.data);
        console.log("Journal Created Successfully:", response.data);
      navigate("/Journalspage");
    
    }catch{
            console.log("post issue")
    }
  };


      
  return (
    <><section className={classes.container}>
        <div className={classes.bodycont}>
          <div className={classes.innerbody}>
            <input
            name='journal_title'
            placeholder='TITLE' 
              value={journals.journal_title}
              onChange={handleChange}
            className={classes.head}></input>
            <div className={classes.diarycont}>

                {/* txtarea */}
              <div className={classes.txtarea}>
                    <div><textarea
                  value={journals.journal_body}
                  className={classes.diary}
                  onChange={handleChange}
                  name="journal_body"
                    rows="4" cols="50" 
                    placeholder="Type your message here.."></textarea></div>
              </div>


                {/* map part */}
              <div className={classes.mapscont}>
                    <div className={classes.map}>
                        <MapContainer center={markers} zoom={13} ref={mapRef}>
                            <TileLayer attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"  />
                            <Marker position={[journals.latitude, journals.longitude]} icon={customIcon}></Marker>
                            {/* {location.loaded && !location.error && (
                                <Marker position={[location.coordinates.lat, location.coordinates.lng]} icon={customIcon}></Marker>
                            )}   this was for geolocation*/}
                  </MapContainer>
                        
                    </div>

                    <div className={classes.mapinfo}><h1 className={classes.maphead}>{journals.country},{journals.city},{journals.district}</h1><button onClick={showMyLocattion} className={classes.mapbut}>Find me</button></div>
              </div>
            </div>
            <button className={classes.mapbut} onClick={handleClick}>Submit</button>
          </div>
        </div>
      </section>




    
    </>
  )
}

export default Editdiary
