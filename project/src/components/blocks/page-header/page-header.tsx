import { Link } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { getUserData, isUserAuthorized } from 'store/selectors';

import Nav from './nav/nav';

function PageHeader():JSX.Element {
  const userData = useAppSelector(getUserData);
  const isAuth = useAppSelector(isUserAuthorized);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <Nav
            userData={userData}
            isAuth={isAuth}
          />
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
