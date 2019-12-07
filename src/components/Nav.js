import React from 'react';
import { NavLink } from 'react-router-dom'


const Nav = () => (
    <nav className="nav">
        <NavLink to="/" activeClassName="is-active" className="nav__item" exact={true}>Home</NavLink>
        <NavLink to="/projects" activeClassName="is-active" className="nav__item">Projects</NavLink>
        <NavLink to="/skills" activeClassName="is-active" className="nav__item">Skills</NavLink>
        <NavLink to="/contact" activeClassName="is-active" className="nav__item">Contact</NavLink>
    </nav>
)

export default Nav;