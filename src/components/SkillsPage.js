import React from 'react';
import Header from './Header';
import Card from './Card';
import Nav from './Nav';
import { FormattedMessage } from 'react-intl';

import css from '../img/techs/css.png';
import react from '../img/techs/react.png';
import node from '../img/techs/node.png';
import mongo from '../img/techs/mongodb.png';
import { useMediaQuery } from 'react-responsive';

const SkillsPage = () => {
  const is600px = useMediaQuery({ query: '(max-width: 600px)' });

  const nodeParagraphs = [
    <FormattedMessage id='SkillsPage.NodeListOne' defaultMessage='Express,' />,
    <FormattedMessage
      id='SkillsPage.NodeListTwo'
      defaultMessage='Restful API, MVC,'
    />,
    <FormattedMessage
      id='SkillsPage.NodeListThree'
      defaultMessage='Error handling, security,'
    />,
    <FormattedMessage
      id='SkillsPage.NodeListFour'
      defaultMessage='Server side rendering with pug templates'
    />,
  ];
  const cssParagraphs = [
    <FormattedMessage
      id='SkillsPage.CSSListOne'
      defaultMessage='Sass preprocessor,'
    />,
    <FormattedMessage
      id='SkillsPage.CSSListTwo'
      defaultMessage='Flexbox, Grid,'
    />,
    <FormattedMessage
      id='SkillsPage.CSSListThree'
      defaultMessage='Cool animations, clean and nested code,'
    />,
    <FormattedMessage
      id='SkillsPage.CSSListFour'
      defaultMessage='Modern and responsive design'
    />,
  ];
  const reactParagraphs = [
    <FormattedMessage
      id='SkillsPage.ReactListOne'
      defaultMessage='React v16 & v15,'
    />,
    <FormattedMessage
      id='SkillsPage.ReactListTwo'
      defaultMessage='React-Router, Redux,'
    />,
    <FormattedMessage id='SkillsPage.ReactListThree' defaultMessage='Hooks,' />,
    <FormattedMessage
      id='SkillsPage.ReactListFour'
      defaultMessage='Third party components'
    />,
  ];
  const mongoParagraphs = [
    <FormattedMessage
      id='SkillsPage.MongoDBListOne'
      defaultMessage='Mongoose, Atlas, Compass,'
    />,
    <FormattedMessage
      id='SkillsPage.MongoDBListTwo'
      defaultMessage='Data CRUD operations, aggreagtion,'
    />,
    <FormattedMessage
      id='SkillsPage.MongoDBListThree'
      defaultMessage='Data validation and protection,'
    />,
    <FormattedMessage
      id='SkillsPage.MongoDBListFour'
      defaultMessage='Data modelling'
    />,
  ];

  return (
    <div className='container'>
      <Header
        title={<FormattedMessage id='Nav.skills' defaultMessage='Skills' />}
      />
      <div className='content content--skillPage'>
        <div className='info'>
          <p className='info__p'>
            {!is600px && (
              <FormattedMessage
                id='SkillsPage.paragraphOnePartOne'
                defaultMessage='Hover technology to get more detailed info. '
              />
            )}
            <FormattedMessage
              id='SkillsPage.paragraphOnePartTwo'
              defaultMessage='Full list of technlogies I work with you can find by clicking this '
            />
            <a
              href='https://docs.google.com/document/d/1UUktoP11nRqgAhTEppao9B58RL6dvOz4u9B0DO5Lt74/edit?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FormattedMessage
                id='SkillsPage.paragraphOnePartThree'
                defaultMessage='link.'
              />
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
