import React from 'react';
import Header from "./Components/header";
import CarouselTime from "./Components/CarouselTime";
import AboutUs from "./Components/Stateless/AboutUs";
import Highlights from "./Components/Stateless/Highlights";


const App = () => {
    return (
        <>
            <div style={{height:"1800px"}}>
                <Header/>
                <CarouselTime/>{/*make the time higher order component*/}
                <AboutUs/>
                <Highlights/>
            </div>
        </>
    );
};

export default App;