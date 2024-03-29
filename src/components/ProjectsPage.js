import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Carousel from './Carousel';
import { FormattedMessage } from 'react-intl';
import Div100vh from 'react-div-100vh';
import { useMediaQuery } from 'react-responsive';

const ProjectsPage = () => {
  const isMobileLandscape = useMediaQuery({ query: '(max-height: 500px' });

  return (
    <Div100vh
      className={
        isMobileLandscape ? 'container container--landscape' : 'container'
      }
    >
      <Header titleEn='Projects' titlePl='Projekty' />

      <div className='content content--projectPage'>
        <div className='info'>
          <p className='info__p'>
            <FormattedMessage
              id='ProjectsPage.paragraphOne'
              defaultMessage='I decided not to include projects from online courses here, despite
            the fact that their creation was very important in my development.'
            />
          </p>
          <p className='info__p'>
            <FormattedMessage
              id='ProjectsPage.paragraphTwoPartOne'
              defaultMessage='I wrote all the projects in the portfolio 100% by myself. '
            />
            <a
              href='https://github.com/look919'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FormattedMessage
                id='ProjectsPage.paragraphTwoPartTwo'
                defaultMessage='See how i write my code.'
              />
            </a>
          </p>
        </div>
        <Carousel />
      </div>
      <Nav />
    </Div100vh>
  );
};

export default ProjectsPage;
