import React from 'react';
import Header from './Header';
import Nav from './Nav';
import MyPhoto from './MyPhoto';
import { FormattedMessage } from 'react-intl';
import Div100vh from 'react-div-100vh';

const NotFoundPage = () => {
  return (
    <Div100vh className='container'>
      <Header titleEn='404 ;(' titlePl='404 ;(' />
      <div className='content content--contactPage'>
        <div className='info'>
          <p className='info__p'>
            <FormattedMessage
              id='NotFoundPage.paragraphOne'
              defaultMessage="Page that you are looking for doesn't exist or is not aviable right now."
            />
          </p>
          <p className='info__p'>
            <FormattedMessage
              id='NotFoundPage.paragraphTwo'
              defaultMessage='Try again later.'
            />
          </p>
        </div>
        <div className='notFound__content'>
          <MyPhoto />
          <MyPhoto />
          <MyPhoto />
        </div>
      </div>
      <Nav />
    </Div100vh>
  );
};

export default NotFoundPage;
