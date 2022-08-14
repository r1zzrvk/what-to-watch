import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TABS } from '../../constants/film';
import { DetailsTab } from './tabs/details-tab/details-tab';
import { OverviewTab } from './tabs/overview-tab/overview-tab';
import { ReviewsTab } from './tabs/reviews-tab/reviews-tab';

export const FilmTabs = () => {
  const [active, setActive] = useState<typeof TABS[number]>('Overview');
  const changeTab = () => {
    switch (active) {
      case 'Overview':
        return <OverviewTab />;
      case 'Details':
        return <DetailsTab />;
      case 'Reviews':
        return <ReviewsTab />;
      default:
        return <OverviewTab />;
    }
  };

  const handleClick = (tab: typeof TABS[number]) => {
    setActive(tab);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {TABS.map((tab) => (
            <li key={tab} className={`film-nav__item ${active === tab && 'film-nav__item--active'}`}>
              <Link to='' className="film-nav__link" onClick={() => handleClick(tab)}>{tab}</Link>
            </li>
          )
          )}
        </ul>
      </nav>
      {changeTab()}
    </div>
  );
};
