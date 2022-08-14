import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../api/api';
import { appReducer } from './reducers/app-reducer';
import { filmReducer } from './reducers/film-reducer';
import { redirect } from './middleware/redirect';
import { reviewReducer } from './reducers/review-reducer';

export const api = createAPI();

export const rootReducer = combineReducers({
  film: filmReducer.reducer,
  app: appReducer.reducer,
  review: reviewReducer.reducer,
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
