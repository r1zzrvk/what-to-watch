import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../api/api';
import { appReducer } from './app-reducer';
import { filmReducer } from './film-reducer';
import { redirect } from './middleware/redirect';

export const api = createAPI();

export const rootReducer = combineReducers({
  film: filmReducer.reducer,
  app: appReducer.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }).concat(redirect),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
