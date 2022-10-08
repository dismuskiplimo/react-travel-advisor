import React from "react";

import "./PlaceDetails.css";

const PlaceDetails = ({place}) => {
    return (
        <div className = "card border-dark mb-3">
            <img src={ place.photo ? place.photo.images.large.url : "" } className="card-img-top" alt={place.name}></img>
            <div className="card-body">
                <h5 className="card-title">{ place.name }</h5>
                <div className="d-flex justify-content-between text-muted">
                    <small>Price</small>
                    <small>{place.price_level}</small>
                </div>
                
                <div className="d-flex justify-content-between text-muted">
                    <small>Ranking</small>
                    <small>{place.ranking}</small>
                </div>

                {place?.awards?.map((award, index) => (
                     <div className="d-flex justify-content-between text-muted" key = { award.display_name + index } >
                        <img src={award.images.small} alt={award.display_name} />
                        <small>{award.display_name}</small>
                    </div>
                ))}

                <div>
                    {place?.cuisine?.map((cuisineType, index) => (
                        <div className="d-flex justify-content-between text-muted" key = {cuisineType + index}>
                            <span className="badge bg-secondary"></span> 
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}

export default PlaceDetails;