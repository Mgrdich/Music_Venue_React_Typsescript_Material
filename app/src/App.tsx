import React from 'react';
import Header from "./Components/header";
import CarouselTime from "./Components/CarouselTime";


const App = () => {
    return (
        <>
            <div style={{height:"1800px"}}>
                <Header/>
                <CarouselTime/>{/*make the time higher order component*/}
            </div>
        </>
    );
};

export default App;