import React, {useState} from 'react';
import JsonContent from "../../WebsiteContent/content.json"
import Description from "./Description";
import {useDeepCompareEffect} from "../../CustomHooks/DeepCompareUseEffect";
let Fade = require("react-reveal/Fade");

interface NumberChange {
    startNumber: number;
    endNumber: number;
}

const Highlights = () => {
    const [disCountNumber, ChangeDisNumber] = useState<NumberChange>({startNumber: 0, endNumber: 30});

    function changePercentage() {
        let obj = {...disCountNumber};
        if (disCountNumber.startNumber < disCountNumber.endNumber)
            obj.startNumber += 1;
        ChangeDisNumber(obj);
    }

    useDeepCompareEffect(() => {
        setTimeout(() => {
            changePercentage();
        }, 250);
    }, disCountNumber);

    return (
        <div className="highlights">
            <Fade delay={500}>
                <Description class="description" headerContent="Highlights" bodyContent={JsonContent.lorem}/>
                <div className="ticket_description">
                    <Fade onReveal={()=>changePercentage()}>
                        <div className="number">
                            {disCountNumber.startNumber}%
                        </div>
                    </Fade>
                    <Description class="purchase_description" headerContent="Purchase your Ticket here"
                                 bodyContent={JsonContent.purchase}>
                        <button>Purchase</button>
                    </Description>

                </div>
            </Fade>
        </div>
    );
};

export default Highlights;