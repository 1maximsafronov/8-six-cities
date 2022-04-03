import LoginForm from '../../blocks/login-form/login-form';
import PageHeader from '../../blocks/page-header/page-header';
import { AppRoute, AuthorizationStatus } from 'const';
import { Navigate } from 'react-router-dom';

function LoginPage({authorizationStatus}:Props):JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoute.Main}/>
      : (
        <div className="page page--gray page--login">
          <PageHeader />

          <main className="page__main page__main--login">
            <div className="page__login-container container">

              <LoginForm />

              <section className="locations locations--login locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </section>
            </div>
          </main>
        </div>)
  );
}

type Props = {
  authorizationStatus: AuthorizationStatus
}

export default LoginPage;
