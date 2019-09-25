import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {allImages} from "../Style/images/allImages";

let {default: Slider} = require("react-slick");


const Carousel: React.FC = () => {
    let settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    };
    return (
        <div
            className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`
            }}
        >
            <Slider {...settings}>
                {allImages.map((item: string, index: number): JSX.Element => {
                    return (
                        <div className={`slider_img img${index}`} key={index}>
                            <img src={item} alt=""/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default Carousel;