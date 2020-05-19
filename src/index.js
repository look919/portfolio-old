import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './Wrapper';
import AppRouter from './routers/AppRouter';
import './sass/main.scss';

ReactDOM.render(
  <Wrapper>
    <AppRouter />
  </Wrapper>,
  document.getElementById('root')
);
