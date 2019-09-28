import React from 'react';

interface IProps {
    class:string;
    headerContent:string;
    bodyContent:string;
}
const Description:React.FC<IProps> = (props) => {
    return (
        <div className={props.class}>
           <div className="header">{props.headerContent}</div>
           <div className="body">{props.bodyContent}</div>
        </div>
    );
};

export default Description;