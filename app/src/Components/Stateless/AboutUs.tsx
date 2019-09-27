import React from 'react';
import CardInfo from "./CardInfo";
import AboutUS from "../../WebsiteContent/AboutUs.json"
import {CardInfoProps} from "../../interfaces/JsonInterfaces";

let Zoom = require("react-reveal/Zoom");

const AboutUs: React.FC = () => {
    return (
        <div className="AboutUs">
            {
                AboutUS.map((item: CardInfoProps, index: number) => {
                    return (
                        <Zoom duration={700} delay={index*500} key={index}>
                            <CardInfo {...item}/>
                        </Zoom>
                    );
                })
            }
        </div>
    );
};

export default AboutUs;