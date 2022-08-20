import { useState } from 'react';
import { TABS } from '../../constants/film';
import { ItemList } from '../item-list/item-list';
import { Tab } from './tab/tab';
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

  const onClick = (tab: typeof TABS[number]) => {
    setActive(tab);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <ItemList items={TABS} renderItem={(tab) => <Tab key={tab} tab={tab} active={active} handleClick={onClick}/>}/>
        </ul>
      </nav>
      {changeTab()}
    </div>
  );
};
