import React from 'react';
import {CardInfoProps} from "../../interfaces/JsonInterfaces";

const CardInfo: React.FC<CardInfoProps> = ({headerInfo, bodyInfo}) => {
    return (
        <div className="card">
            <div className="header">
                {headerInfo}
            </div>
            <div className="body">
                {bodyInfo}
            </div>
        </div>
    );
};

export default CardInfo;