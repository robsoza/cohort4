import React from 'react';

import game from '../svg/game.svg';
import rocket from '../svg/rocket.svg';
import target from '../svg/target.svg';
import origami from '../svg/origami.svg';
import cloud from '../svg/cloud.svg';

const LogosData = [
    { id: 1, src: game, className: "My-logo", alt: 'logo', clicked: false },
    { id: 2, src: rocket, className: "My-logo", alt: 'logo', clicked: false },
    { id: 3, src: target, className: "My-logo", alt: 'logo', clicked: false },
    { id: 4, src: origami, className: "My-logo", alt: 'logo', clicked: false },
    { id: 5, src: cloud, className: "My-logo", alt: 'logo', clicked: false }
]

function MyLogo(props) {
    const clickStyle = {
        color: "blue",
        border: "solid",
        transform: "rotate(-360deg)",
    }

    return (
        <div className="My-logo" >
            <img
                id={props.logo.id}
                src={props.logo.src}
                className={props.logo.className}
                alt={props.logo.alt}
                onClick={() => props.handleChange(props.logo.id)}
                style={props.logo.clicked ? clickStyle : null}
            />
        </div>
    )
}

export { LogosData, MyLogo };