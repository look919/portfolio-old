import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { useMediaQuery } from 'react-responsive';
import { Context } from '../Wrapper';
import Select from 'react-select';
import PlLang from '../img/pllang.png';
import EnLang from '../img/uklang.png';

const Header = ({ title, messageId, defaultMessage }) => {
  const context = useContext(Context);
  let local = localStorage.getItem('lang') || 'en';

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
      <h1 className='header__heading-primary'>
        <FormattedMessage id={messageId} defaultMessage={defaultMessage} />
      </h1>
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
      <h1 className='header__heading-primary'>
        <FormattedMessage id={messageId} defaultMessage={defaultMessage} />
      </h1>
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
