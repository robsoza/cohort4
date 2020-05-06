import React from 'react';

const SvgLogo = (props) => {
    return (
        <div>
        <img src={props.src} className="My-logo" alt="logo-target" />
        </div>
    )
}

export default SvgLogo;