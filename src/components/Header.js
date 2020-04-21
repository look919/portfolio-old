import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Header = (props) => {
  const is600px = useMediaQuery({ query: '(max-width: 600px)' });

  const mobileView =
    props.title === 'Tomasz Wirkus' ? (
      <header className='header header--mobile'>
        <h1 className='header__heading-primary'>{props.title}</h1>
      </header>
    ) : (
      <header className='header'>
        <h1 className='header__heading-primary'>{props.title}</h1>
      </header>
    );
  const deskopView =
    props.title === 'Tomasz Wirkus' ? (
      <header className='header header--delayed'>
        <h1 className='header__heading-primary'>{props.title}</h1>
      </header>
    ) : (
      <header className='header'>
        <h1 className='header__heading-primary'>{props.title}</h1>
      </header>
    );

  return !is600px ? deskopView : mobileView;
};

export default Header;
