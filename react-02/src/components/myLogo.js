import React from 'react';

import rocket from '../svg/rocket.svg';
import target from '../svg/target.svg';
import origami from '../svg/origami.svg';
import cloud from '../svg/cloud.svg';

const Logos = [
    { id: 1, src: rocket},
    { id: 2, src: target },
    { id: 3, src: origami },
    { id: 4, src: cloud }
]

const changeStyle = {
    color: "#cdcdcd",
}

function MyLogo(props) {
    return (
        <div className="My-logo" >
            <img
                id={props.id}
                src={props.src}
                className={props.className}
                alt={props.alt}
                onClick={props.onClick}
                style={props.changeStyle}
            />
        </div>
    )
}

export { Logos, MyLogo };