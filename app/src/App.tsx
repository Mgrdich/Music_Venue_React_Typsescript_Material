import React from 'react';
import Header from "./Components/header";
import Carousel from "./Components/Carousel";


const App = () => {
    return (
        <>
            <div style={{height:"1800px"}}>
                <Header/>
                <Carousel/>
            </div>
        </>
    );
};

export default App;