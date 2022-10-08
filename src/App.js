import React from "react";

import { useEffect } from "react";

import {List, Map, Header, PlaceDetails} from "./components";

const App = () => {
    useEffect(() => {
        document.title = "Home Page";
    }, []);
    
    return (
        <>
            <Header />
            
            <div className = "container">
                <div className="row">
                    <div className = "col-xs-12 col-md-4">
                        <List/>
                    </div>

                    <div className = "col-xs-12 col-md-8">
                        <Map/>
                    </div>
                </div>
            </div>
           
        </>
    );
}

export default App;