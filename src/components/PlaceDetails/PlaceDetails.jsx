import React from "react";
import Rating from "@material-ui/lab/Rating";

import "./PlaceDetails.css";
import defaultImage from "../../img/default.jpg";

const PlaceDetails = ({place}) => {
    return (
        <div className = "card border-dark mb-3">
            <img src={ place.photo ? place.photo.images.large.url : defaultImage } className="card-img-top" alt={place.name} />
            <div className="card-body">
                <h5 className="card-title">{ place.name }</h5>
                
                
                <div className="d-flex justify-content-between text-muted">
                    <Rating value={place.rating} readOnly></Rating>
                    <small>out of {place.num_reviews} reviews</small>
                </div>
                
                <div className="d-flex justify-content-between text-muted">
                    <small>Price</small>
                    <small>{place.price ? place.price: "N/A"}</small>
                </div>
                
                <div className="d-flex justify-content-between text-muted">
                    <small>Ranking</small>
                    <small>{place.ranking ? place.ranking : "N/A"}</small>
                </div>

                {place?.awards?.map((award, index) => (
                     <div className="d-flex justify-content-between text-muted" key = { award.display_name + index } >
                        <img src={award.images.small} alt={award.display_name} />
                        <small>{award.display_name}</small>
                    </div>
                ))}

                {place?.address && (
                    <div className="d-flex justify-content-between text-muted">
                        <small><i className="fa-solid fa-location-dot"></i></small>
                        <small style={{textAlign: "right", maxWidth: "80%"}}>{place.address}</small>
                    </div>
                )}

                <div className="mt-3">
                    {place?.cuisine?.map((cuisineType, index) => (
                        <span className="badge bg-secondary" key = {cuisineType.key + index} style={{marginRight: "5px"}}>{cuisineType.name}</span> 
                    ))}
                </div>

                {place?.phone && (
                    <div className="mt-3 d-flex justify-content-between text-muted">
                        <small><i className="fa-solid fa-phone"></i></small>
                        <small>
                            <a href={"tel:" + place.phone} className="nav-link">{place.phone}</a>    
                        </small>
                    </div>
                )}

                <p className="mt-3">
                    {place?.web_url && (
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => window.open(place.web_url, "_blank")}>Tripadvisor Page</button>
                    )}

                    {place?.website && (
                        <button className="btn btn-sm btn-outline-secondary mx-3" onClick={() => window.open(place.website, "_blank")}>Visit Website</button>
                    )}
                </p>
            </div>
            
        </div>
    );
}

export default PlaceDetails;