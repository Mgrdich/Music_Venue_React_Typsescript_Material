import React from 'react';
import Header from "./Components/header";
import CarouselTime from "./Components/CarouselTime";
import AboutUs from "./Components/Stateless/AboutUs";
import Highlights from "./Components/Stateless/Highlights";
import Pricing from "./Components/Stateless/Pricing";


const App = () => {
    return (
        <>
            <div style={{height:"1800px"}}>
                <Header/>
                <CarouselTime/>{/*make the time higher order component*/}
                <AboutUs/>
                <Highlights/>
                <Pricing/>
            </div>
        </>
    );
};

export default App;