import React from 'react';
import Prices from "../../WebsiteContent/prices.json"
import Description from "./Description";

const Pricing = () => {
    return (
        <>
            <div className="header_pricing">Pricing</div>
            <div className="pricing">
                {
                    Prices.map((item: any, index: number) => {
                        return (
                            <Description class="prices_card" headerContent={`${item.price} $`}
                                         bodyContent={item.description}
                                         key={index}>
                                <button>Go Purchase</button>
                            </Description>
                        );
                    })
                }
            </div>
        </>
    );
};

export default Pricing;