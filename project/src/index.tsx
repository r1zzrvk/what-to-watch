import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchFilms } from './store/actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchFilms());
const isAuth = false;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App isAuth={isAuth} />
    </Provider>
  </React.StrictMode>,
);
