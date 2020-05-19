import React, { useState, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Context } from '../Wrapper';
import Select from 'react-select';
import PlLang from '../img/pllang.png';
import EnLang from '../img/uklang.png';

const Header = (props) => {
  const context = useContext(Context);

  const is600px = useMediaQuery({ query: '(max-width: 600px)' });
  const options = [
    {
      value: 'en',
      label: (
        <div>
          <img src={EnLang} className='header__select__lang' alt='uk flag' />
        </div>
      ),
    },
    {
      value: 'pl',
      label: (
        <div>
          <img src={PlLang} className='header__select__lang' alt='pl flag' />
        </div>
      ),
    },
  ];
  console.log(context.locale, options[0].value);

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

        <Select
          className='header__select'
          defaultValue={{
            value: 'en',
            label: (
              <div>
                <img
                  src={EnLang}
                  className='header__select__lang'
                  alt='uk flag'
                />
              </div>
            ),
          }}
          onChange={(e) => context.selectLang(e)}
          options={options}
        />
      </header>
    ) : (
      <header className='header'>
        <h1 className='header__heading-primary'>{props.title}</h1>
        <Select
          className='header__select'
          value={context.locale}
          onChange={(e) => context.selectLang(e)}
          options={options}
        />
      </header>
    );

  return !is600px ? deskopView : mobileView;
};

export default Header;
