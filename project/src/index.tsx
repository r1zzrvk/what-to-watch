import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { FILMS } from './mocks/film';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const isAuth = false;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App isAuth={isAuth} films={FILMS} />
    </Provider>
  </React.StrictMode>,
);
