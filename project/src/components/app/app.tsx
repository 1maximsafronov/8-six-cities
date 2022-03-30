import {BrowserRouter, Route,Routes} from 'react-router-dom';

import { AppRoute } from '../../const';
import { offers } from '../../mocks/offers';

import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import {reviews} from '../../mocks/reviews';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesPage />}
        />
        <Route
          path={AppRoute.Room}
          element={<RoomPage reviews={reviews}/>}
        />
        <Route
          path={AppRoute.RoomDev}
          element={<RoomPage reviews={reviews}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
