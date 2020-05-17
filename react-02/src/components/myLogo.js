import React from 'react';
//logo's svg
import reactlogo from '../svg/reactlogo.svg';
import tictactoe from '../svg/tictactoe.svg';
import account from '../svg/account.svg';
import city from '../svg/city.svg';
//components
import TicTacToe from '../components/TicTacToe'
import LearnReact from '../components/LearnReact'

const LogosData = [
    { id: 1, src: reactlogo, className: "My-logo", alt: 'logo', active: true, page: <LearnReact /> },
    { id: 2, src: tictactoe, className: "My-logo", alt: 'logo', active: false, page: <TicTacToe /> },
    { id: 3, src: account, className: "My-logo", alt: 'logo', active: false, page: <LearnReact /> },
    { id: 4, src: city, className: "My-logo", alt: 'logo', active: false, page: <LearnReact /> },
]

function MyLogo(props) {
    const activeStyle = {
        color: "blue",
        border: "solid",
        transform: "rotate(360deg)",
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