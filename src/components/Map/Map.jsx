import React, {useState, useEffect} from "react";
import GoogleMapReact from "google-map-react";
import Rating from "@material-ui/lab/Rating";

import defaultImage from "../../img/default.jpg";
import "./Map.css";

const Map = ({setCoordinates, setBounds, coordinates, defaultCenterCoordinates, places, setChildClicked}) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        })
    });

    return (
        <div className="mapContainer">
            
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                defaultCenter={defaultCenterCoordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[0,0,0,0]}
                options={{}}
                onChange={(e)=>{
                    setCoordinates({
                        lat: e.center.lat,
                        lng: e.center.lng
                    });

                    setBounds({
                        ne: e.marginBounds.ne,
                        sw: e.marginBounds.sw
                    });
                }}
                onChildClick={(e)=> setChildClicked(e)}
            >
                {places?.map((place, index) => (
                    <div 
                        className="markerContainer"
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={index}
                    >
                        {width <= 600 ? (
                            <i className="fa-solid fa-location-dot"></i>
                        ) 
                        : (
                            <div className="paper">
                                <strong>{ place.name }</strong>
                                <img src={ place.photo ? place.photo.images.large.url : defaultImage } alt={place.name}/>
                                <Rating size="small" value={place.rating !== undefined ? place.rating : null} max={5} readOnly></Rating>
                            </div>
                        )}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;