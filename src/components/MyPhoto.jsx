import React from 'react';

import { Link } from 'react-router-dom';

import myPhoto from '../img/me.png';
import { LinkedInIcon, GithubIcon, CVIcon, GmailIcon } from '../Icons/Icons';

const MyPhoto = () => {
  return (
    <div className='my-photo about-me__photo'>
      <img src={myPhoto} className='my-photo__img-radius' alt='Tomasz Wirkus' />
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
  );
};

export default MyPhoto;
