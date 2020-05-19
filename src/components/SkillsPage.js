import React from 'react';
import Header from './Header';
import Card from './Card';
import Nav from './Nav';

import css from '../img/techs/css.png';
import react from '../img/techs/react.png';
import node from '../img/techs/node.png';
import mongo from '../img/techs/mongodb.png';
import { useMediaQuery } from 'react-responsive';

const SkillsPage = () => {
  const is600px = useMediaQuery({ query: '(max-width: 600px)' });

  const nodeParagraphs = [
    'Express,',
    'Restful API, MVC,',
    'Error handling, security,',
    'Server side rendering with pug templates',
  ];
  const mongoParagraphs = [
    'Mongoose, Atlas, Compass,',
    'Data CRUD operations, aggreagtion,',
    'Data validation and protection,',
    'Data modelling',
  ];
  const cssParagraphs = [
    'Sass preprocessor,',
    'Float, flexbox and grid layouts,',
    'Cool animations, clean and nested code,',
    'Modern and responsive design,',
  ];
  const reactParagraphs = [
    'React v16 & v15,',
    'Redux,',
    'Hooks, Third party components,',
    'Basic understanding of unit testing with Jest',
  ];

  return (
    <div className='container'>
      <Header title='Skills' />
      <div className='content content--skillPage'>
        <div className='info'>
          <p className='info__p'>
            {!is600px && 'Hover technology to get more detailed info. '}
            Full list of technlogies I work with you can find by clicking this{' '}
            <a
              href='https://docs.google.com/document/d/1UUktoP11nRqgAhTEppao9B58RL6dvOz4u9B0DO5Lt74/edit?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              link.
            </a>{' '}
          </p>
        </div>

        <section className='skillsPage'>
          <Card
            name='Node.js'
            img={node}
            paragraphs={nodeParagraphs}
            css='node'
          />
          <Card
            name='CSS & Sass'
            img={css}
            paragraphs={cssParagraphs}
            css='css'
          />
          <Card
            name='React'
            img={react}
            paragraphs={reactParagraphs}
            css='react'
          />
          <Card
            name='MongoDB'
            img={mongo}
            paragraphs={mongoParagraphs}
            css='db'
          />
        </section>
      </div>
      <Nav />
    </div>
  );
};

export default SkillsPage;
