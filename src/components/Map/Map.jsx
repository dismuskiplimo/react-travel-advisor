import React from "react";
import GoogleMapReact from "google-map-react";

import "./Map.css";

const Map = () => {
    const coonridates = {lat: 0, lng: 0};

    return (
        <div className="" style={{height: 'calc(100vh - 100px)'}}>
            
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyD5in7m-Kujo9m1nzW_Usguwjb-7GwQCLA'}}
                defaultCenter={coonridates}
                center={coonridates}
                defaultZoom={14}
                margin={[0,0,0,0]}
                options={{}}
                onChange={()=>{}}
                onChildClick={()=>{}}
            >
            </GoogleMapReact>
        </div>
    );
}

export default Map;