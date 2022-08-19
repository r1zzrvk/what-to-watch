import { Link } from 'react-router-dom';

type TTabProps = {
  tab: string
  active: string
  handleClick: (tab: string) => void
}

export const Tab = ({ tab, active, handleClick }: TTabProps) => (
  <li key={tab} className={`film-nav__item ${active === tab && 'film-nav__item--active'}`}>
    <Link to='' className="film-nav__link" onClick={() => handleClick(tab)}>{tab}</Link>
  </li>
);
