import React, { useEffect, useState } from 'react'

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: {lat: "", lng: ""}

    });
const onSucces = position => {
    setLocation({
        loaded:true,
        lat : position.coords.latitude, 
        lng: position.coords.longitude,
    })
}

const onError = error => {
    setLocation({
        loaded: true,
        error: {
            code: error.code,
            message: error.message,
    }} )
}


    useEffect(() => {
        if(!("geolocation" in navigator) ){
                onError({
                    code: 0,
                    message: "Geolocation not supported"
                });
            }
        
        navigator.geolocation.getCurrentPosition(onSucces, onError)
    }, []);
  return (
    <div>useGeoLocation</div>
  )
}

export default useGeoLocation