import React, { useRef, useState } from 'react'
import classes from './Editdiary.module.css'
import { Link } from 'react-router-dom'
import Logo from '../Images/logo bigger.png'
import {Icon} from "leaflet";
import cusicon from "./image.png"

import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import useGeoLocation from './useGeoLocation'

const Editdiary = () => {
    var [markers, setMarkers] = useState({lat: 48.88, lng:2.355})
    const mapRef = useRef();

    const customIcon = new Icon({
        // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
        iconUrl: cusicon,
        iconSize: [38, 38] // size of the icon
      });
    
    //imported function for find my location
const location = useGeoLocation();

//function to fly to to my location
const showMyLocattion = () => {
    if( location.loaded && !location.error ){
        mapRef.current.leafletElement.flyTo([location.coordinates.lat,location.coordinates.lng], 13, {animate: true});
    } else{
        alert(location.error.message);
    }
}

    // markers = [
    //     {
    //       geocode: [48.86, 2.3522],
    //       popUp: "Hello, I am pop up 1"
    //     },
    //     {
    //       geocode: [48.85, 2.3522],
    //       popUp: "Hello, I am pop up 2"
    //     },
    //     {
    //       geocode: [48.855, 2.34],
    //       popUp: "Hello, I am pop up 3"
    //     }
    //   ];
      
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
            <h1 className={classes.head}>TITLE</h1>
            <div className={classes.diarycont}>

                {/* txtarea */}
                <div className={classes.txtarea}>
                    <div></div>
                    <div></div>
                </div>


                {/* map part */}
                <div className={classes.mapscont}>
                    <div className={classes.map}>
                        <MapContainer center={markers} zoom={13} ref={mapRef}>
                            <TileLayer attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"  />
                            {location.loaded && !location.error && (
                                <Marker position={[location.coordinates.lat, location.coordinates.lng]} icon={customIcon}></Marker>
                            )}
                        </MapContainer>
                        
                    </div>

                    <div className={classes.mapinfo}><h1 className={classes.maphead}>Map location</h1><button onClick={showMyLocattion} className={classes.mapbut}>Find me</button></div>
                </div>
            </div>
        </div>
    </div>
    </section>




    
    </>
  )
}

export default Editdiary
