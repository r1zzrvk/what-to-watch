import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { FILMS } from './mocks/film';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const isAuth = false;

root.render(
  <React.StrictMode>
    <App isAuth={isAuth} films={FILMS}/>
  </React.StrictMode>,
);
