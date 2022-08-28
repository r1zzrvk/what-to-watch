import { FormEvent, useRef } from 'react';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { loginIn } from '../../store/api-actions/app-actions/app';
import { TAuthData } from '../../types/auth';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loginRef.current && passwordRef.current) {
      const authData: TAuthData = {
        login: loginRef.current.value,
        password: passwordRef.current.value,
      };

      dispatch(loginIn(authData));
    }
  };

  return (
    <form className="sign-in__form" onSubmit={handleSubmit}>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn">Sign in</button>
      </div>
    </form>
  );
};
