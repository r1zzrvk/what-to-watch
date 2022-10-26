import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../../api/user';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { FilmPage } from '../../pages/film-page/film-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { MyListPage } from '../../pages/my-list-page/my-list-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { PlayerPage } from '../../pages/player-page/player-page';
import { ReviewPage } from '../../pages/review-page/review-page';
import { setUserData } from '../../store/reducers/app-reducer/app-reducer';
import browserHistory from '../../utils/browser-history';
import { HistoryRouter } from '../history-router/history-router';
import { PrivateRoute } from '../private-route/private-route';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUserData(getUser()));
  }, [dispatch]);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/films/:id' element={<FilmPage />} />
        <Route path='/mylist' element={
          <PrivateRoute>
            <MyListPage />
          </PrivateRoute>
        }
        />
        <Route path='/player/:id' element={<PlayerPage />} />
        <Route path='/films/:id/review' element={
          <PrivateRoute>
            <ReviewPage />
          </PrivateRoute>
        }
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
};
