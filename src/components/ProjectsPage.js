import React, { useState } from 'react';

import Header from './Header';
import Info from './Info';
import Nav from './Nav';

import { ArrowRight, ArrowLeft } from '../Icons/Icons';
import SingleProject from './SingleProject';

const ProjectsPage = () => {
  const [index, setIndex] = useState(0);

  const projects = require('../projects.json');
  const paragraph = [
    'I decided not to include projects from online courses in the portfolio, despite the fact that their creation was very important in my development, I wrote all the projects in the portfolio 100% by myself.',
    'The most important projects of mine for now are ChickyChicken and HotelGiant(still in development), the first is an application for restaurant, the second is for a hotel. Both are made with an idea to get overview of a services that those comapnies can sell. Besides that in both apps potential customers can make an order online or contact with company. HotelGiant also includes api crud operations on hotel rooms/users/orders, authentication for guests and admins, error handling and in the future online payments.',
  ];

  const addIndex = () => {
    const maxIndex = projects.length;
    let newValueOfIndex = index + 1;

    if (newValueOfIndex === maxIndex) newValueOfIndex = 0;

    setIndex(newValueOfIndex);
  };
  const subtractIndex = () => {
    //first and last value
    const lastProjectIndex = projects.length - 1;

    let newValueOfIndex = index - 1;
    if (newValueOfIndex < 0) newValueOfIndex = lastProjectIndex;

    setIndex(newValueOfIndex);
  };

  return (
    <div className='container'>
      <Header title='Projects' />
      <Info title='My works' paragraph={paragraph} modalSvg={2} />
      <div className='content content--projectPage'>
        <SingleProject project={projects[index]} />
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
