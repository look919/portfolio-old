import React, { useState } from 'react';
import Header from './Header';
import Info from './Info';
import Nav from './Nav';

import { ArrowRight, ArrowLeft } from '../Icons/Icons';
import SingleProject from './SingleProject';
import SingleProjectSmall from './SingleProjectSmall';
import { useMediaQuery } from 'react-responsive';

const ProjectsPage = () => {
  const is1200px = useMediaQuery({ query: '(max-width: 1200px)' });
  //projects and indexes values
  const projects = require('../projects.json');
  const paragraph = [
    'I decided not to include projects from online courses in the portfolio, despite the fact that their creation was very important in my development, I wrote all the projects in the portfolio 100% by myself.',
    'The most important projects of mine for now are TomOffice(still in development) and HotelGiant, both made in mern stack. The first is an online shop, the second is application for a hotel. Both apps are made with an idea to get overview of a services that those companies can sell. Besides that in both apps potential customers can make an order online or contact with company.',
  ];

  const [index, setIndex] = useState(0);
  const lastIndex = projects.length - 1;
  const indexOverflowMax = projects.length;
  const indexOverflowMin = -1;

  const addIndex = () => {
    let newValueOfIndex = index + 1;
    if (newValueOfIndex === indexOverflowMax) newValueOfIndex = 0;

    setIndex(newValueOfIndex);
  };
  const subtractIndex = () => {
    let newValueOfIndex = index - 1;
    if (newValueOfIndex <= indexOverflowMin) newValueOfIndex = lastIndex;

    setIndex(newValueOfIndex);
  };

  return (
    <div className='container'>
      <Header title='Projects' />
      <Info title='My works' paragraph={paragraph} modalSvg={2} />
      <div className='content content--projectPage'>
        <SingleProject project={projects[index]} />
        {!is1200px && (
          <SingleProjectSmall
            project={
              index - 1 === indexOverflowMin
                ? projects[lastIndex]
                : projects[index - 1]
            }
            side='left'
          />
        )}
        {!is1200px && (
          <SingleProjectSmall
            project={
              index + 1 === indexOverflowMax ? projects[0] : projects[index + 1]
            }
            side='right'
          />
        )}

        <div className='project__btns'>
          <button onClick={() => subtractIndex()} className='project__btn'>
            <ArrowLeft />
          </button>
          <button onClick={() => addIndex()} className='project__btn'>
            <ArrowRight />
          </button>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default ProjectsPage;
