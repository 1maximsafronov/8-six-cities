import PageHeader from '../../blocks/page-header/page-header';
import PageFooter from 'components/blocks/page-footer/page-footer';
import Favorites from 'components/blocks/favorites/favorites';
import { useAppDispatch } from 'hooks';
import {  useAppSelector } from 'hooks';
import { getFavorites, getFavoritesStatus, isUserAuthorized } from 'store/selectors';
import { Navigate } from 'react-router-dom';
import { AppRoute } from 'const';
import { useEffect } from 'react';
import { fetchFavoritesHotels } from 'store/api-actions';
import classNames from 'classnames';
import { reseteFavorites } from 'store/action';

function FavoritesPage():JSX.Element {
  const isAuth = useAppSelector(isUserAuthorized);
  const favorites = useAppSelector(getFavorites);
  const isDataLoaded = useAppSelector(getFavoritesStatus);
  const dispatch = useAppDispatch();
  const isEmpty = !isDataLoaded || !favorites || favorites.length <= 0;

  useEffect(() => {
    dispatch(fetchFavoritesHotels());

    return () => {
      dispatch(reseteFavorites());
    };
  }, []);

  if (!isAuth) {
    return <Navigate to={AppRoute.Login}/>;
  }

  const pageClassName = classNames(
    'page',
    {'page--favorites-empty': isEmpty},
  );

  const pageMainClassName = classNames(
    'page__main page__main--favorites',
    {'page__main--favorites-empty': isEmpty},
  );

  return (
    <div className={pageClassName}>
      <PageHeader />

      <main className={pageMainClassName}>
        <div className="page__favorites-container container">
          <Favorites
            isLoading={!isDataLoaded}
            isEmpty={isEmpty}
            hotels={favorites}
          />
        </div>
      </main>

      <PageFooter />
    </div>
  );
}

export default FavoritesPage;
