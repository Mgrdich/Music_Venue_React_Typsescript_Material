import React from 'react';

const Map = () => {
    return (
        <div className="map">
            <div className="header">Location</div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.8360049562516!2d21.394868315844928!3d42.00379497921244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354146eb0712b45%3A0x5cb922ad93242b3b!2sLed%20Zeppelin%20Cafe%20Bar!5e0!3m2!1sen!2s!4v1569769105970!5m2!1sen!2s"
                width="100%" height="500px" frameBorder="0" allowFullScreen title="myLocation"
            >
            </iframe>
        </div>
    );
};

export default Map;