import React from 'react';
let Fade = require("react-reveal/Fade");

const Highlights = () => {
    return (
        <div className="highlights">
            <Fade delay={500}>
                <div className="description">
                    <h2>Highlights</h2>
                    <div className="description_body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolores eius eveniet, exercitationem facere fugiat minus nesciunt nobis nulla quam quo quod suscipit. Aperiam, cupiditate ducimus natus nemo numquam ut!
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Highlights;