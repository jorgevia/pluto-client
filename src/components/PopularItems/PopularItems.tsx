import * as React from 'react';
import { Link } from 'react-router-dom';

import './PopularItems.scss';

import { entityToName } from '../../configs/entities';
import { totalToShow } from '../../configs/popularItems';
import { getSwapiRoute } from '../../configs/routes';
import { sortPopularItems, usePopularItems } from '../../providers/PopularItemsProvider';

type PopularItemsProps = {
  className?: string;
};

const PopularItems = ({ className = '' }: PopularItemsProps) => {
  const { popularItems } = usePopularItems();
  const hasPopularItems = Object.keys(popularItems).length > 0;

  const sortedPopularItems = React.useMemo(() => {
    if (!hasPopularItems) return [];
    return sortPopularItems(popularItems);
  }, [popularItems]);

  return (
    <div className={`popular-items popular-items--center ${className}`}>
      {hasPopularItems ? (
        sortedPopularItems.slice(0, totalToShow).map((item) => (
          <Link className="popular-items__item" key={item.url} to={getSwapiRoute(item.url)}>
            <div className="popular-items__item__entity">
              {entityToName[item.entity].toUpperCase()}
            </div>
            <div className="popular-items__item__title">{item.title}</div>
            <div className="popular-items__item__views">Total views: {item.totalViews}</div>
          </Link>
        ))
      ) : (
        <div className="popular-items__empty">No popular items yet</div>
      )}
    </div>
  );
};

export default PopularItems;
