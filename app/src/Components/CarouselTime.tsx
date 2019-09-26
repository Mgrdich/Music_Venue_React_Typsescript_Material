import React from 'react';
import Carousel from "./Carousel";
import TimeCountDown from "./TimeCountDown";

const CarouselTime:React.FC = () => {
    return (
        <div className="carrousel_time">
            <Carousel/>
            <TimeCountDown/>
        </div>
    );
};

export default CarouselTime;