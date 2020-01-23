import React from 'react';

const Header = props => {
  return props.title === 'Tomasz Wirkus' ? (
    <div className='header header--delayed'>
      <h1 className='header__heading-primary'>{props.title}</h1>
    </div>
  ) : (
    <div className='header'>
      <h1 className='header__heading-primary'>{props.title}</h1>
    </div>
  );
};

export default Header;
