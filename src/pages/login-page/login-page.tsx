import { LoginForm } from '../../components/login-form/login-form';
import { Footer } from '../../components/ui/footer/footer';
import { Logo } from '../../components/ui/logo/logo';

export const LoginPage = () => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <Logo />
      <h1 className="page-title user-page__title">Sign in</h1>
    </header>
    <div className="sign-in user-page__content">
      <LoginForm />
    </div>
    <Footer />
  </div>
);
