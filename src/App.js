import React from "react";
import { useEffect, useState } from "react";
import {List, Map, Header, PlaceDetails} from "./components";
import { getPlacesData } from "./api";

const App = () => {
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});
    const [defaultCenterCoordinates, setDefaultCenterCoordinates] = useState({lat: 0, lng: 0});
    const [bounds, setBounds] = useState({ne: {lat: 0, lng: 0}, sw: {lat: 0, lng: 0}});
    const [childClicked, setChildClicked] = useState(null);

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCoordinates({lat: position.coords.latitude, lng: position.coords.longitude});
        });
    }, []);

    useEffect(() => {
        document.title = "Home Page";

        getPlacesData(type, bounds.sw, bounds.ne)
        .then((response) => {
            setPlaces(response.filter(place => place.rating !== undefined && Number(place.rating) >= rating));
        });
    }, [type, coordinates, bounds, rating]);
    
    return (
        <>
            <Header setCoordinates={setCoordinates} />
            
            <div className = "container-fluid mt-4">
                <div className="row">
                    <div className = "col-xs-12 col-md-4" style={{maxHeight: "calc(100vh - 100px)", overflowY: "scroll"}}>
                        <List 
                            childClicked={childClicked} 
                            places={places} 
                            type={type}
                            rating={rating}
                            setType={setType}
                            setRating={setRating}
                        />
                    </div>

                    <div className = "col-xs-12 col-md-8">
                        <Map 
                            setCoordinates={setCoordinates} 
                            setBounds={setBounds} 
                            coordinates={coordinates} 
                            defaultCenterCoordinates={defaultCenterCoordinates}
                            places={places}
                            setChildClicked={setChildClicked}
                        />
                    </div>
                </div>
            </div>
           
        </>
    );
}

export default App;