import React from "react";

function About({ about, image }) {
    return (
        <aside>
            {image ? <img src={image} /> : <img src="https://via.placeholder.com/215" />}
            <p>{about}</p>
        </aside>
    )
};

export default About;