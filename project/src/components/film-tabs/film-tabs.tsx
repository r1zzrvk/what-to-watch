import { useState } from 'react';
import { TABS } from '../../constants/film';
import { ItemList } from '../item-list/item-list';
import { Tab } from './tab/tab';
import { DetailsTab } from './tabs/details-tab/details-tab';
import { OverviewTab } from './tabs/overview-tab/overview-tab';
import { ReviewsTab } from './tabs/reviews-tab/reviews-tab';

export const FilmTabs = () => {
  const [activeTab, setActiveTab] = useState<typeof TABS[number]>('Overview');
  const changeTab = () => {
    switch (activeTab) {
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
    setActiveTab(tab);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <ItemList items={TABS} renderItem={(tab) => <Tab key={tab} tab={tab} activeTab={activeTab} onClick={handleClick}/>}/>
        </ul>
      </nav>
      {changeTab()}
    </div>
  );
};
