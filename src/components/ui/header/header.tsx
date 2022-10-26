import React from 'react';
import { Logo } from '../logo/logo';
import { UserBlock } from '../user-block/user-block';

const Header = () => (
  <header className='page-header film-card__head'>
    <Logo />
    <UserBlock />
  </header>
);

const memorizedHeader = React.memo(Header);

export { memorizedHeader as Header };
