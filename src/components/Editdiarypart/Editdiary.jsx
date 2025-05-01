import React, { useEffect, useRef, useState } from 'react'
import classes from './Editdiary.module.css'
import { Link } from 'react-router-dom'
import Logo from '../Images/logo bigger.png'
import {Icon} from "leaflet";
import cusicon from "./image.png"

import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import useGeoLocation from './useGeoLocation'
import axios from 'axios';

const Editdiary = () => {
    var [markers, setMarkers] = useState({lat: 48.88, lng:2.355})
    const mapRef = useRef();
    const [message, setMessage] = useState("Error");
    const [userLocation, setUserLocation] = useState ("")

    console.log(message);

    if(!markers){
        setMarkers({lat: "", lng: ""})
    }
    const[journals, setJournals] = useState({
        email: "john@gmail.com",
        journal_title: "",
        journal_body: "",
        city: "",
        country: "",
        district: "",
        travel_pic: "",
        latitude: "",
        longitude: ""
    })
    const fetchLocation = async () => {
        const response = await axios.get("https://jj-server-irokshvwx-thunderarbys-projects.vercel.app/api/location")
        try{
            setUserLocation(response.data);
            console.log(response.data.longitude)
            console.log(response.data.latitude)
        } catch {
            console.log("error")
        }
    }
    const fetchApi = async () => {
        const response = await axios.get("https://jj-server-irokshvwx-thunderarbys-projects.vercel.app/api/journal");
        try{
        setJournals(response.data);
        console.log(response.data.longitude);
        console.log(response.data.lantitude);
        } catch{    
        setJournals({email: "john@gmail.com",
        journal_title: "",
        journal_body: "",
        city: "",
        country: "",
        district: "",
        travel_pic: "",
        latitude: "",
        longitude: ""})
        }
    }


    useEffect(() => {
        fetchApi();
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
    console.log(userLocation.longitude)
    console.log(userLocation.location)
    if( location.loaded && !location.error ){
        mapRef.current.leafletElement.flyTo([journals.latitude,journals.longitude], 13, {animate: true});
    } else{
        alert(location.error.message);
    }
}

const handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value from the event
    setJournals((prevState) => ({
      ...prevState,
      [name]: value, // Dynamically update the field
    }));
  };

const handleClick = async (e) => {
    e.preventDefault();
    //send to backend here
    try{
        const response = await axios.post('https://jj-server-irokshvwx-thunderarbys-projects.vercel.app/api/journal', {
          email: journals.email,
          journal_title: journals.journal_title,
          journal_body: journals.journal_body,
          city: journals.city,
          country: journals.country,
          district: journals.district,
          travel_pic: journals.travel_pic,
          latitude: journals.latitude,
          longitude: journals.longitude
        });setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Creation error");
    }
    // Form submission logic here
    
    console.log(userLocation.latitude)
    console.log(journals.latitude)
    console.log("Form submitted:", journals);
};


      
  return (
    <><section className={classes.container}>
    <div className={classes.navcont}>
        <div className={classes.logo}>{Logo}</div>
        <ul className={classes.navbar}>
            <li className={classes.navlist}><Link to='/' className={classes.navlink}>HOME</Link></li>
            <li className={classes.navlist}><Link to='' className={classes.navlink}>JOURNAL</Link></li>
            <li className={classes.navlist}><Link to='/Loginpage' className={classes.navlink}>LOG IN</Link></li>
            <li className={classes.navlist}><Link to='/' className={classes.navlink}>CONTACT</Link></li>
        </ul>
    </div>
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
