import {Route,Routes} from 'react-router-dom';
import browserHistory from 'browse-history';
import { AppRoute } from '../../const';
import HistoryRouter from 'components/history-router/history-router';

import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from 'components/blocks/private-route/private-route';
import { useAppSelector } from 'hooks';
import { getAuthStatus } from 'store/selectors';

function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage authorizationStatus={authStatus} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authStatus}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<RoomPage />}
        />
        <Route
          path={AppRoute.RoomDev}
          element={<RoomPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </HistoryRouter>

  );
}

export default App;
