import React, {useState} from "react";
import {Autocomplete} from "@react-google-maps/api";

import "./Header.css";


const Header = ({setCoordinates}) => {
    const [autocomplete, setAutocomplete] = useState(null);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({lat: lat, lng: lng});
    }

    const onLoad = (e) => {
        setAutocomplete(e);
    }

    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#e3f2fd'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Places To Stay</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>

                    </ul>

                    <form className="d-flex" role="search">
                        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </Autocomplete>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Header;