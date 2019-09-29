import React from 'react';
import Prices from "../../WebsiteContent/prices.json"
import Description from "./Description";
let Fade = require("react-reveal/Fade");

const Pricing = () => {
    return (
        <>
            <div className="header_pricing">Pricing</div>
            <div className="pricing">
                {
                    Prices.map((item: any, index: number) => {
                        return (
                            <Fade delay={item.CardDelay} key={index}>
                                <Description class="prices_card" headerContent={`${item.price} $`}
                                            bodyContent={item.description}
                                            >
                                <button>Go Purchase</button>
                            </Description>
                            </Fade>
                        );
                    })
                }
            </div>
        </>
    );
};

export default Pricing;