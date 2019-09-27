import React from 'react';
import CardInfo from "./Stateless/CardInfo";
import AboutUS from "../WebsiteContent/AboutUs.json"
import {CardInfoProps} from "../interfaces/JsonInterfaces";

const AboutUs:React.FC = () => {
    return (
        <div className="AboutUs">
            {
                AboutUS.map((item:CardInfoProps,index:number)=>{
                    return(
                      <CardInfo {...item}/>
                    );
                })
            }
        </div>
    );
};

export default AboutUs;