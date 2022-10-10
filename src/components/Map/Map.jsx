import React from "react";
import GoogleMapReact from "google-map-react";

import "./Map.css";

const Map = ({setCoordinates, setBounds, coordinates, defaultCenterCoordinates, places}) => {

    return (
        <div className="" style={{height: 'calc(100vh - 100px)'}}>
            
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
                
            </GoogleMapReact>
        </div>
    );
}

export default Map;