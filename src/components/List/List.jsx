import React, {useState, useEffect} from "react";
import {PlaceDetails} from "../";

import "./List.css";

const List = ({places}) => {
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        
    }, [type, rating]);

    return (
        <div>
            <h4>Restaurants, Hotels & Attractions around you</h4>

            <div className="row">
                <div className="col-sm-6 col-xs-6">
                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <select value={type} className="form-control" id = "type" onChange={(e) => setType(e.target.value)}>
                            <option value="restaurants">Restaurants</option>
                            <option value="hotels">Hotels</option>
                            <option value="attractions">Attractions</option>
                        </select>
                    </div>
                </div>

                <div className="col-sm-6 col-xs-6">
                    <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <select value={rating} className = "form-control" id = "rating" onChange={(e) => setRating(e.target.value)}>
                            <option value={0}>All</option>
                            <option value={3}>Above 3.0</option>
                            <option value={4}>Above 4.0</option>
                            <option value={4.5}>Above 4.5</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                { places?.map((place, index) => <PlaceDetails key = {place.location_id} place = {place} /> ) }
            </div>
        </div>
    );
}

export default List;