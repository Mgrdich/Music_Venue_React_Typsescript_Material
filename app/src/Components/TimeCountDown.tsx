import React from 'react';

const TimeCountDown: React.FC = () => {

    return (
        <div className="countdown">
            <div className="countdown_top">
                Concert Start In
            </div>
            <div className="countdown_bottom">
                <div className="countdown_time">
                    23
                </div>
                <div className="countdown_tag">
                    Days
                </div>
            </div>
        </div>
    );
};

export default TimeCountDown;