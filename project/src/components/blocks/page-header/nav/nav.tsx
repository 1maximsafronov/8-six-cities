import { AuthData } from 'types/user';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { logoutAction } from 'store/api-actions';

function PageHeaderNav({userData,isAuth }:PageHeaderNavProps):JSX.Element {

  const dispatch = useAppDispatch();

  const renderUser = ():JSX.Element => {

    if (!isAuth || !userData) {
      return (
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to="/login">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      );
    } else {
      return  (
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="/">
            <div className="header__avatar-wrapper user__avatar-wrapper">
              <img className='user__avatar' src={userData.avatarUrl} alt="" />
            </div>
            <span className="header__user-name user__name">{userData.email}</span>
          </a>
        </li>
      );
    }
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {renderUser()}

        {isAuth && (
          <li className="header__nav-item">
            <a className="header__nav-link" href="/">
              <span className="header__signout" onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
              >Sign out
              </span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

type PageHeaderNavProps = {
  userData: AuthData | null,
  isAuth: boolean;
}

export default PageHeaderNav;
