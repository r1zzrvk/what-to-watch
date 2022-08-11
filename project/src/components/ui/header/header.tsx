import { Logo } from '../logo/logo';
import { UserBlock } from '../user-block/user-block';

export const Header = () => (
  <header className='page-header film-card__head'>
    <Logo />
    <UserBlock />
  </header>
);
