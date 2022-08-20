import React from 'react';
import { Logo } from '../logo/logo';
import { UserBlock } from '../user-block/user-block';

const header = () => (
  <header className='page-header film-card__head'>
    <Logo />
    <UserBlock />
  </header>
);

export const Header = React.memo(header);
