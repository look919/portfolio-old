import React from 'react';
import Header from './Header';
import Info from './Info';
import Nav from './Nav';
import { Link } from 'react-router-dom';

import myPhoto from '../img/me.png';
import Polish from '../img/polflag.png';
import English from '../img/uk.png';
import Italian from '../img/italy.png';
import { LinkedInIcon, GithubIcon, CVIcon, GmailIcon } from '../Icons/Icons';

const WelcomePage = () => {
  const paragraph = [
    'I started my programming adventure with the beginning of my studies in October 2018. At the beginning I programmed in c++ but around March 2019 i decided that i want to tie my future with web developing. ',
    "For the first couple of months i was focused on frontend using raw Javascript and CSS with Sass preprocessor. Later I dived into React and thats the place where most of my projects comes from. Right now I'm mostly focused on backend using Node.js. My goal is to become MERN stack developer and i work hard everyday to become one.",
  ];
  return (
    <div className='container container--animated'>
      <Header title='Tomasz Wirkus' />
      <Info title='About me' paragraph={paragraph} modalSvg={0} />
      <div className='content content--welcomePage'>
        <p className='main-page__text'>
          Hello! My name is Tomasz and I would like to welcome you on my
          website, feel free to look around.
        </p>
        <div className='about-me'>
          <ul className='about-me__list'>
            <li className='about-me__item'>
              Name: <span className='about-me__item--answer'>Tomasz</span>
            </li>
            <li className='about-me__item'>
              Surname: <span className='about-me__item--answer'>Wirkus</span>
            </li>
            <li className='about-me__item'>
              Age: <span className='about-me__item--answer'>21</span>
            </li>
            <li className='about-me__item'>
              Status:{' '}
              <span className='about-me__item--answer'>
                Student of computer science
              </span>
            </li>
            <li className='about-me__item'>
              Goal:
              <span className='about-me__item--answer'>
                Fullstack Developer
              </span>
            </li>
            <li className='about-me__item'>
              Languages:
              <span className='about-me__item--answer about-me__item--answer--languages'>
                <img
                  src={Polish}
                  className='about-me__item--flag'
                  alt='language icon'
                />{' '}
                - Native,&nbsp;
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
              Email:
              <span className='about-me__item--answer'>
                wirkus919@gmail.com
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
                href='https://drive.google.com/file/d/1wThyPSeCTsdrNSzQ0C4alVxYPzZ6--gZ/view?usp=sharing'
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
