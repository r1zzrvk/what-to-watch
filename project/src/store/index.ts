import { configureStore } from '@reduxjs/toolkit';
import { filmReducer } from './film-reducer';

export const store = configureStore({
  reducer: {
    film: filmReducer.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
