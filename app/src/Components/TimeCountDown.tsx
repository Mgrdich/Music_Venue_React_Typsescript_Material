import React, {useEffect, useState} from 'react';
import {Deadline, myDate} from "../interfaces/CompInterfaces";

let Slide = require("react-reveal/Slide");

const TimeCountDown: React.FC = () => {
    const deadline = 'Dec, 18, 2020';
    const [myDate, ChangeData] = useState<myDate>({});

    useEffect(() => {
        setInterval(() => getTimeUntil(deadline), 1000);
    }, [deadline]);

    function getTimeUntil(deadline: string) {
        const time = Date.parse(deadline) - Date.parse(new Date().toString());
        if (time < 0) {

        } else {
            const seconds: number = Math.floor((time / 1000) % 60);
            const minutes: number = Math.floor((time / 1000 / 60) % 60);
            const hours: number = Math.floor(time / (1000 * 60 * 60) % 24);
            const days: number = Math.floor((time / (1000 * 60 * 60 * 24)));
            ChangeData({seconds, minutes, hours, days})
        }
    }

    return (
        <Slide left delay={1000}>
            <div className="countdown">
                <div className="countdown_top">
                    Concert Start In
                </div>
                {
                    Object.keys(myDate).map((item) => {
                        return (
                            <div className="countdown_bottom">
                                <div className="countdown_time">
                                    {item}
                                </div>
                                <div className="countdown_tag">
                                    {myDate.days}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </Slide>
    );
};

export default TimeCountDown;