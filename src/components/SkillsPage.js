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
    "List of technologies I've worked with:",
    'HTML, CSS, Sass, Javascript, React, Redux, Node.js, Firebase, MongoDB, Mongoose, C++, Qt.',
    "List of tools I've worked with:",
    'VSC, Git, Heroku, Surge, Postman, MongoDB Compass, MongoDB Atlas, npm, yarn.'
  ];

  return (
    <div className='container'>
      <Header title='Skills' />
      <Info title='What exactly can i do?' paragraph={paragraph} modalSvg={1} />
      <div className='content content--skillPage'>
        <div className='card card--css'>
          <div className='card__side card__side--front background-css'>
            <div className='card__side--front-header'>CSS & Sass</div>
            <div>
              <img
                src={css}
                alt='CSS Logo'
                className='card__side--front-image'
              />
            </div>
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
            <div>
              <img src={js} alt='JS Logo' className='card__side--front-image' />
            </div>
          </div>
          <div className='card__side card__side--back background-js'>
            <ul className='card__side--back__list'>
              <li>ES6/ES7</li>
              <li>OOP, Babel, Webpack</li>
              <li>Promises, JSON</li>
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
            <div>
              <img
                src={react}
                alt='React Logo'
                className='card__side--front-image'
              />
            </div>
          </div>
          <div className='card__side card__side--back background-css'>
            <ul className='card__side--back__list'>
              <li>React-router, Redux, Hooks</li>
              <li>Basic understanding of unit testing in Jest</li>
              <li>Firebase database, storage and authentication</li>
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
            <div>
              <img
                src={node}
                alt='HTML Logo'
                className='card__side--front-image'
              />
            </div>
          </div>
          <div className='card__side card__side--back background-node'>
            <ul className='card__side--back__list'>
              <li>Learning still in progress!</li>
              <li>Express</li>
              <li>mongoDB, mongoose</li>
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

// <div className="card">
//     <div className="card__side card__side--front background-html">
//         <div className="card__side--front-header">Git</div>
//         <div>
//             <img src={git} alt="Git Logo" className="card__side--front-image"/>
//         </div>
//     </div>
//     <div className="card__side card__side--back background-html">
//         <ul className="card__side--back__list">
//             <li>Work locally with repo</li>
//             <li>Use GitHub</li>
//             <li>BDFBD</li>
//             <li>Course by Maciej Aniserowicz: <a className="card__side--back__link" href="https://kursgita.pl/" target="_blanc">
//             Link</a></li>
//         </ul>
//         <div>
//             <img src={git} alt="Git Logo"className="card__side--front-image"/>
//         </div>
//     </div>
// </div>
