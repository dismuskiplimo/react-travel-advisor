import React from "react";

import "./PlaceDetails.css";

const PlaceDetails = ({place}) => {
    return (
        <div className = "card border-primary mb-3">
            <div className="card-body">
                <p>{place.name}</p>
            </div>
            
        </div>
    );
}

export default PlaceDetails;