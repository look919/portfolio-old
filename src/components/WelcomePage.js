import React from 'react';
import Header from './Header';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FormattedMessage } from 'react-intl';

import myPhoto from '../img/me.png';
import Polish from '../img/polflag.png';
import English from '../img/uk.png';
import Italian from '../img/italy.png';
import { LinkedInIcon, GithubIcon, CVIcon, GmailIcon } from '../Icons/Icons';

const WelcomePage = () => {
  const is600px = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <div className={!is600px ? `container container--animated` : 'container'}>
      <Header title='Tomasz Wirkus' />
      <div className='content content--welcomePage'>
        <div className={!is600px ? `info info--animated` : 'info'}>
          <p className='info__p'>
            <FormattedMessage
              id='WelcomePage.paragraphOne'
              defaultMessage='Hello! My name is Tomasz and I would like to welcome you on my
                website, feel free to look around.'
            />
          </p>
          <p className='info__p'>
            <FormattedMessage
              id='WelcomePage.paragraphTwo'
              defaultMessage='I am into web programming for over one year and my goal is to become
          MERN Stack Developer so i work hard everyday to become one.'
            />
          </p>
        </div>
        <div className={!is600px ? `about-me about-me--animated` : 'about-me'}>
          <ul className='about-me__list'>
            <li className='about-me__item'>
              <FormattedMessage id='WelcomePage.name' defaultMessage='Name: ' />
              <span className='about-me__item--answer'>
                <FormattedMessage
                  id='WelcomePage.nameAnswer'
                  defaultMessage='Tomasz'
                />
              </span>
            </li>
            <li className='about-me__item'>
              <FormattedMessage
                id='WelcomePage.vorname'
                defaultMessage='Surname: '
              />
              <span className='about-me__item--answer'>
                <FormattedMessage
                  id='WelcomePage.vornameAnswer'
                  defaultMessage='Wirkus'
                />
              </span>
            </li>
            <li className='about-me__item'>
              <FormattedMessage id='WelcomePage.age' defaultMessage='Age: ' />
              <span className='about-me__item--answer'>
                <FormattedMessage
                  id='WelcomePage.ageAnswer'
                  defaultMessage='21'
                />
              </span>
            </li>
            <li className='about-me__item'>
              <FormattedMessage
                id='WelcomePage.status'
                defaultMessage='Status: '
              />
              <span className='about-me__item--answer'>
                <FormattedMessage
                  id='WelcomePage.statusAnswer'
                  defaultMessage='Student of computer science'
                />
              </span>
            </li>
            <li className='about-me__item'>
              <FormattedMessage id='WelcomePage.goal' defaultMessage='Goal: ' />
              <span className='about-me__item--answer'>
                <FormattedMessage
                  id='WelcomePage.goalAnswer'
                  defaultMessage='Fullstack Developer'
                />
              </span>
            </li>
            <li className='about-me__item'>
              <FormattedMessage
                id='WelcomePage.languages'
                defaultMessage='Languages: '
              />
              <span className='about-me__item--answer about-me__item--answer--languages'>
                <img
                  src={Polish}
                  className='about-me__item--flag'
                  alt='language icon'
                />{' '}
                <FormattedMessage
                  id='WelcomePage.languagesAnswer'
                  defaultMessage='- Native,'
                />
                &nbsp;
                <img
                  src={English}
                  className='about-me__item--flag'
                  alt='language icon'
                />{' '}
                - B2,&nbsp;
                <img
                  src={Italian}
                  className='about-me__item--flag'
                  alt='language icon'
                />{' '}
                - A2
              </span>
            </li>
            <li className='about-me__item'>
              <FormattedMessage
                id='WelcomePage.email'
                defaultMessage='Email: '
              />
              <span className='about-me__item--answer'>
                <FormattedMessage
                  id='WelcomePage.emailAnswer'
                  defaultMessage='wirkus919@gmail.com'
                />
              </span>
            </li>
          </ul>
          <div className='my-photo about-me__photo'>
            <img
              src={myPhoto}
              className='my-photo__img-radius'
              alt='Tomasz Wirkus'
            />
            <div className='my-photo__icons'>
              <a
                href='https://www.linkedin.com/in/tomasz-wirkus-435621196/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedInIcon />
              </a>
              <a
                href='https://github.com/look919'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GithubIcon />
              </a>
              <a
                href='https://drive.google.com/file/d/1AeqrLQb9DamGYA2ODQWMLhcxahSRnJYk/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
              >
                <CVIcon />
              </a>
              <Link to='/contact'>
                <GmailIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default WelcomePage;
