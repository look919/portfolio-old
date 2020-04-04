import React from 'react';

import { ArrowRightSmall, ArrowLeftSmall } from '../Icons/Icons';

const SingleProjectSmall = ({ project, side }) => {
  return (
    <figure
      className={
        side === 'left' ? 'project project--right' : 'project project--left'
      }
    >
      <div className='project__info project__info--small'>
        {side === 'left' ? <ArrowLeftSmall /> : <ArrowRightSmall />}
        <a
          href={project.github}
          className='project__link--small'
          target='_blanc'
        >
          Github
        </a>
        <a href={project.url} className='project__link--small' target='_blanc'>
          Online
        </a>
      </div>

      <div className='project__techs'>
        <img
          className='project__img'
          src={require(`../img/projects/${project.img}`)}
          alt='project'
        />

        <div className='project__technologies'>
          {project.imgHover.map((el) => {
            return (
              <img
                src={require(`../img/techs/${el}`)}
                className='project__technologies__imgHover--small'
                key={el}
                alt='project technlogies'
              />
            );
          })}
        </div>
      </div>
    </figure>
  );
};

export default SingleProjectSmall;
