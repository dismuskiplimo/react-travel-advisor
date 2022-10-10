import React, {useState, useEffect} from "react";
import GoogleMapReact from "google-map-react";
import Rating from "@material-ui/lab/Rating";

import defaultImage from "../../img/default.jpg";
import "./Map.css";

const Map = ({setCoordinates, setBounds, coordinates, defaultCenterCoordinates, places}) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        })
    });

    return (
        <div className="mapContainer">
            
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyD5in7m-Kujo9m1nzW_Usguwjb-7GwQCLA'}}
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
                onChildClick={()=>{}}
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
                                <Rating size="small" value={place.rating} readOnly></Rating>
                            </div>
                        )}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;