import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FilmPage } from '../../pages/film-page/film-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { MyListPage } from '../../pages/my-list-page/my-list-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { PlayerPage } from '../../pages/player-page/player-page';
import { ReviewPage } from '../../pages/review-page/review-page';
import { TFilm } from '../../types/film';
import { PrivateRoute } from '../private-route/private-route';

type TAppProps = {
  isAuth: boolean,
  films: TFilm[],
}


export const App = ({ isAuth, films}: TAppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage films={films}/>} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/films/:id' element={<FilmPage />} />
      <Route path='/mylist' element={
        <PrivateRoute isAuth={isAuth}>
          <MyListPage films={films}/>
        </PrivateRoute>
      }
      />
      <Route path='/player/:id' element={<PlayerPage />} />
      <Route path='/films/:id/review' element={<ReviewPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

