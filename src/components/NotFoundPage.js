import React from 'react';
import Header from './Header';
import Nav from './Nav';
import MyPhoto from './MyPhoto';
import { FormattedMessage } from 'react-intl';

const NotFoundPage = () => {
  return (
    <div className='container'>
      <Header
        title={
          <FormattedMessage id='Nav.notFound' defaultMessage='404 Not Found' />
        }
        messageId='Nav.notFound'
        defaultMessage='404 Not Found'
      />
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
    </div>
  );
};

export default NotFoundPage;
