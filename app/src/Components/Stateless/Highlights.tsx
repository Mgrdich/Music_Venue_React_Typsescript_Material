import React from 'react';
import JsonContent from "../../WebsiteContent/content.json"
import Description from "./Description";

let Fade = require("react-reveal/Fade");

const Highlights = () => {
    return (
        <div className="highlights">
            <Fade delay={500}>
                <Description class="description" headerContent="Highlights" bodyContent={JsonContent.lorem}/>
                <div className="ticket_description">
                    <div className="number">
                        30%
                    </div>
                    <Description class="purchase_description" headerContent="Purchase your Ticket here"
                                 bodyContent={JsonContent.purchase}>
                        <button>Hello</button>
                    </Description>

                </div>
            </Fade>
        </div>
    );
};

export default Highlights;