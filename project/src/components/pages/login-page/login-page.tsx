import LoginForm from '../../blocks/login-form/login-form';
import PageHeader from '../../blocks/page-header/page-header';
import { login } from 'store/api-actions';
import { LoginData } from 'types/user';

function LoginPage():JSX.Element {

  const onLoginFormSubmit = (loginData: LoginData) => login(loginData);

  return (
    <div className="page page--gray page--login">
      <PageHeader />

      <main className="page__main page__main--login">
        <div className="page__login-container container">

          <LoginForm onSubmit={onLoginFormSubmit}/>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
