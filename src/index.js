import React from 'react';
import ReactDOM from 'react-dom';
import HttpsRedirect from 'react-https-redirect';
import Wrapper from './Wrapper';
import AppRouter from './routers/AppRouter';
import './sass/main.scss';

ReactDOM.render(
  <HttpsRedirect>
    <Wrapper>
      <AppRouter />
    </Wrapper>
  </HttpsRedirect>,
  document.getElementById('root')
);
