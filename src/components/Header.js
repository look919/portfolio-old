import React from 'react'

const Header = (props) => {
    return(
        <div className="header">
        <h1 className="header__heading-primary">{props.title}</h1>
        <h2 className="header__heading-secondary">{props.subtitle}</h2>
        </div>       
    )
}

export default Header