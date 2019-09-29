import React from 'react';
import Header from "./Components/header";
import CarouselTime from "./Components/CarouselTime";
import AboutUs from "./Components/Stateless/AboutUs";
import Highlights from "./Components/Stateless/Highlights";
import Pricing from "./Components/Stateless/Pricing";
import Map from "./Components/Stateless/Map";

let {Element} = require("react-scroll");
console.log(Element);

const App = () => {
    return (
        <>
            <div style={{height: "1800px"}}>
                <Header/>
                <Element name="Event"><CarouselTime/></Element>{/*make the time higher order component*/}
                <Element name="Info"><AboutUs/></Element>
                <Element name="highlights">
                    <Highlights/>
                </Element>
                <Element name="Pricing"><Pricing/></Element>
                <Element name="map"><Map/></Element>
            </div>
        </>
    );
};

export default App;