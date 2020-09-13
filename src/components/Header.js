import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Context } from '../Wrapper';
import Select from 'react-select';
import PlLang from '../img/pllang.png';
import EnLang from '../img/uklang.png';

const Header = (props) => {
  const context = useContext(Context);
  let local = localStorage.getItem('lang') || 'en';

  const langBtns = {
    pl: { value: 'pl' },
    en: { value: 'en' },
  };

  if (props.titleEn === '') props.titleEn = 'Tomasz Wirkus';
  if (props.titlePl === '') props.titlePl = 'Tomasz Wirkus';

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const isMobileLandscape = useMediaQuery({ query: '(max-height: 500px' });

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

  return (
    <header
      className={
        isMobile || isMobileLandscape
          ? 'header header--mobile'
          : props.titleEn === 'Tomasz Wirkus'
          ? 'header header--delayed'
          : 'header'
      }
    >
      <h1 className='header__heading-primary'>
        {local === 'en' ? props.titleEn : props.titlePl}
      </h1>
      {!isMobile ? (
        <Select
          searchable={false}
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
      ) : (
        <div className='header__langBtns'>
          <button
            onClick={() => context.selectLang(langBtns.pl)}
            className='header__langBtns__btn '
          >
            <img
              src={PlLang}
              alt='pl flag'
              className='header__langBtns__btn__img'
            />
          </button>
          <button
            onClick={() => context.selectLang(langBtns.en)}
            className='header__langBtns__btn'
          >
            <img
              src={EnLang}
              alt='uk flag'
              className='header__langBtns__btn__img'
            />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
