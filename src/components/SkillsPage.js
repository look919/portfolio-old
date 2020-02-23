import React from 'react';
import Header from './Header';
import Info from './Info';
import Nav from './Nav';

import css from '../img/css.png';
import js from '../img/js.png';
import react from '../img/react.png';
import node from '../img/node.png';

const SkillsPage = () => {
  const paragraph = [
    'I really like working with Javascript. Although I try to develop towards MERN stack developer, I do not limit myself to other solutions.',
    "Full list of courses I've taken part:",
    'Advanced CSS and Sass: Flexbox, Grid, Animations and More! by Jonas Schmedtmann ~28h',
    'The Modern JavaScript Bootcamp by Andrew Mead ~30h',
    'The Complete React Developer by Andrew Mead Course ~39h',
    'Node.js, Express, MongoDB & More by Jonas Schmedtmann ~42h',
    'MERN Stack Front To Back by Brad Traversy ~12h',
    'Kurs Gita by Maciej Aniserowicz ~8h'
  ];

  return (
    <div className='container'>
      <Header title='Skills' />
      <Info title='What exactly can i do?' paragraph={paragraph} modalSvg={1} />
      <div className='content content--skillPage'>
        <div className='card card--css'>
          <div className='card__side card__side--front background-css'>
            <div className='card__side--front-header'>CSS & Sass</div>

            <img src={css} alt='CSS Logo' className='card__side--front-image' />
          </div>
          <div className='card__side card__side--back background-css'>
            <ul className='card__side--back__list'>
              <li>Float, flexbox and grid layouts</li>
              <li>Sass preprocessor, clean and nested code</li>
              <li>Cool animations, modern and responsive design</li>
              <li>
                Course by Jonas Schmedtmann on Udemy:{' '}
                <a
                  className='card__side--back__link'
                  href='https://www.udemy.com/course/advanced-css-and-sass/'
                  target='_blanc'
                >
                  Link
                </a>
              </li>
            </ul>
            <img src={css} alt='CSS Logo' className='card__side--front-image' />
          </div>
        </div>

        <div className='card card--js'>
          <div className='card__side card__side--front background-js'>
            <div className='card__side--front-header'>Javascript</div>
            <img src={js} alt='JS Logo' className='card__side--front-image' />
          </div>
          <div className='card__side card__side--back background-js'>
            <ul className='card__side--back__list'>
              <li>ES6/ES7</li>
              <li>OOP, Babel, Webpack</li>
              <li>Promises, JSON, async await</li>
              <li>
                Course by Andrew Mead on Udemy:{' '}
                <a
                  className='card__side--back__link'
                  href='https://www.udemy.com/course/modern-javascript/'
                  target='_blanc'
                >
                  Link
                </a>
              </li>
            </ul>
            <img src={js} alt='JS Logo' className='card__side--front-image' />
          </div>
        </div>
        <div className='card card--react'>
          <div className='card__side card__side--front background-css'>
            <div className='card__side--front-header'>React</div>
            <img
              src={react}
              alt='React Logo'
              className='card__side--front-image'
            />
          </div>
          <div className='card__side card__side--back background-css'>
            <ul className='card__side--back__list'>
              <li>React-router, Redux</li>
              <li>Hooks, third party components</li>
              <li>Basic understanding of unit testing in Jest</li>
              <li>
                Course by Andrew Mead on Udemy:{' '}
                <a
                  className='card__side--back__link'
                  href='https://www.udemy.com/course/react-2nd-edition'
                  target='_blanc'
                >
                  Link
                </a>
              </li>
            </ul>
            <img
              src={react}
              alt='React Logo'
              className='card__side--front-image'
            />
          </div>
        </div>
        <div className='card card--node'>
          <div className='card__side card__side--front background-node'>
            <div className='card__side--front-header'>Node.js</div>
            <img
              src={node}
              alt='HTML Logo'
              className='card__side--front-image'
            />
          </div>
          <div className='card__side card__side--back background-node'>
            <ul className='card__side--back__list'>
              <li>Express, error Handling, security</li>
              <li>
                MongoDB, Mongoose, data operations, validation and modelling
              </li>
              <li>Server side rendering with pug templates</li>
              <li>
                Course by Jonas Schmedtmann on Udemy:{' '}
                <a
                  className='card__side--back__link'
                  href='https://www.udemy.com/course/nodejs-express-mongodb-bootcamp'
                  target='_blanc'
                >
                  Link
                </a>
              </li>
            </ul>
            <img
              src={node}
              alt='HTML Logo'
              className='card__side--front-image'
            />
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default SkillsPage;
