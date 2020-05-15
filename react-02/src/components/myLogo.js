import React from 'react';

import reactlogo from '../svg/reactlogo.svg';
import tictactoe from '../svg/tictactoe.svg';
import rocket from '../svg/rocket.svg';
import target from '../svg/target.svg';
import cloud from '../svg/cloud.svg';

import TicTacToe from '../components/TicTacToe'
import LearnReact from '../components/LearnReact'

const LogosData = [
    { id: 1, src: reactlogo, className: "My-logo", alt: 'logo', active: false, page: <LearnReact /> },
    { id: 2, src: tictactoe, className: "My-logo", alt: 'logo', active: false, page: <TicTacToe /> },
    { id: 3, src: rocket, className: "My-logo", alt: 'logo', active: false, page: <LearnReact /> },
    { id: 4, src: target, className: "My-logo", alt: 'logo', active: false, page: <LearnReact /> },
    { id: 5, src: cloud, className: "My-logo", alt: 'logo', active: false, page: <LearnReact /> }
]

function MyLogo(props) {
    const activeStyle = {
        color: "blue",
        border: "solid",
        transform: "rotate(-360deg)",
    }

    return (

        <div className='My-logo'>
            <img
                id={props.logo.id}
                src={props.logo.src}
                className={props.logo.className}
                alt={props.logo.alt}
                onClick={() => props.handleChange(props.logo.id)}
                style={props.logo.active ? activeStyle : null}
            />
        </div>
    )
}

export { LogosData, MyLogo };