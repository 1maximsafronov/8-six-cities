import { useAppDispatch } from 'hooks';
import { ChangeEvent, FormEvent, useState } from 'react';
import { loginAction } from 'store/api-actions';

function LoginForm():JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const onEmailChange = (evt: ChangeEvent<HTMLInputElement>) => setEmail(evt.target.value);
  const onPassChange = (evt: ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value);

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction({email,password}));
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" action="#" method="post" onSubmit={submitHandler}>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input className="login__input form__input"
            placeholder="Email"
            type="email"
            name="email"
            required
            value={email}
            onChange={onEmailChange}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input className="login__input form__input"
            placeholder="Password"
            type="password"
            name="password"
            required
            value={password}
            onChange={onPassChange}
          />
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    </section>
  );
}

export default LoginForm;
