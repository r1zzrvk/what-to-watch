import { Link } from 'react-router-dom';

type TTabProps = {
  tab: string
  activeTab: string
  onClick: (tab: string) => void
}

export const Tab = ({ tab, activeTab, onClick }: TTabProps) => (
  <li key={tab} className={`film-nav__item ${activeTab === tab && 'film-nav__item--active'}`}>
    <Link to='' className="film-nav__link" onClick={() => onClick(tab)}>{tab}</Link>
  </li>
);
