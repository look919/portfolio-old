import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Nav = () => (
  <nav className='nav'>
    <NavLink
      to='/'
      activeClassName='is-active'
      className='nav__item'
      exact={true}
    >
      <FormattedMessage id='Nav.home' defaultMessage='Home' />
    </NavLink>
    <NavLink to='/skills' activeClassName='is-active' className='nav__item'>
      <FormattedMessage id='Nav.skills' defaultMessage='Skills' />
    </NavLink>
    <NavLink to='/projects' activeClassName='is-active' className='nav__item'>
      <FormattedMessage id='Nav.projects' defaultMessage='Projects' />
    </NavLink>
    <NavLink to='/contact' activeClassName='is-active' className='nav__item'>
      <FormattedMessage id='Nav.contact' defaultMessage='Contact' />
    </NavLink>
  </nav>
);

export default Nav;
