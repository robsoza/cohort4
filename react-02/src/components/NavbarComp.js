import React from 'react';

//logo's svg
import reactlogo from '../svg/reactlogo.svg';
import tictactoe from '../svg/tictactoe.svg';
import account from '../svg/account.svg';
import city from '../svg/city.svg';
import link from '../svg/link.svg';
import queue from '../svg/queue.svg';

//components
import TicTacToeComp from './TicTacToeComp'
import LearnReactComp from './LearnReactComp'
import AccountComp from './AccountComp'
import CityComp from './CityComp';

const LogosData = [
    { id: 1, src: reactlogo, className: "Active-logo", alt: 'logo', page: <LearnReactComp /> },
    { id: 2, src: tictactoe, className: "My-logo", alt: 'logo', page: <TicTacToeComp /> },
    { id: 3, src: account, className: "My-logo", alt: 'logo', page: <AccountComp /> },
    { id: 4, src: city, className: "My-logo", alt: 'logo', page: <CityComp /> },
    { id: 5, src: link, className: "My-logo", alt: 'logo', page: <CityComp /> },
    { id: 6, src: queue, className: "My-logo", alt: 'logo', page: <CityComp /> }
]

function NavbarComp(props) {
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
                style={props.logo.className === "Active-logo" ? activeStyle : null}
            />
        </div>
    )
}

export { LogosData, NavbarComp };