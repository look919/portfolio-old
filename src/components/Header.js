import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Context } from '../Wrapper';
import Select from 'react-select';
import PlLang from '../img/pllang.png';
import EnLang from '../img/uklang.png';

const Header = ({ title }) => {
  const context = useContext(Context);
  let local = localStorage.getItem('lang') || 'en';

  switch (title) {
    case 'Skills':
      local === 'en' ? (title = 'Skills') : (title = 'Umiejętności');
      break;
    case 'Projects':
      local === 'en' ? (title = 'Projects') : (title = 'Projekty');
      break;
    case 'Contact':
      local === 'en' ? (title = 'Contact') : (title = 'Kontakt');
      break;
    default:
      break;
  }

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

  const mobileView = (
    <header
      className={title === 'Tomasz Wirkus' ? 'header header--mobile' : 'header'}
    >
      <h1 className='header__heading-primary'>{title}</h1>
      <Select
        className='header__select'
        defaultValue={{
          value: local,
          label: (
            <div>
              <img
                src={local === 'en' ? EnLang : PlLang}
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
  );

  const deskopView = (
    <header
      className={
        title === 'Tomasz Wirkus' ? 'header header--delayed' : 'header'
      }
    >
      <h1 className='header__heading-primary'>{header}</h1>
      <Select
        className='header__select'
        defaultValue={{
          value: local,
          label: (
            <div>
              <img
                src={local === 'en' ? EnLang : PlLang}
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
  );

  return !is600px ? deskopView : mobileView;
};

export default Header;
