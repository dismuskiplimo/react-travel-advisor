import React from "react";

import { useEffect } from "react";

import {List, Map, Header, PlaceDetails} from "./components";

const App = () => {
    useEffect(() => {
        document.title = "Home Page";
    }, []);
    
    return (
        <div>
            Hello World

           
        </div>
    );
}

export default App;