import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../api/api';
import { filmReducer } from './film-reducer';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    film: filmReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
