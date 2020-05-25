import React from 'react';

//logo's svg
import reactlogo from '../svg/reactlogo.svg';
import tictactoe from '../svg/tictactoe.svg';
import account from '../svg/account.svg';
import city from '../svg/city.svg';

//components
import TicTacToeComp from './TicTacToeComp'
import LearnReactComp from './LearnReactComp'
import AccountComp from './AccountComp'
import CityComp from './CityComp';

const LogosData = [
    { id: 1, src: reactlogo, className: "Active-logo", alt: 'logo', active: true, page: <LearnReactComp /> },
    { id: 2, src: tictactoe, className: "My-logo", alt: 'logo', active: false, page: <TicTacToeComp /> },
    { id: 3, src: account, className: "My-logo", alt: 'logo', active: false, page: <AccountComp /> },
    { id: 4, src: city, className: "My-logo", alt: 'logo', active: false, page: <CityComp /> },
]

function NavbarComp(props) {
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

export { LogosData, NavbarComp };