import * as React from 'react';
import { Link } from 'react-router-dom';

import './PopularItems.scss';

import { entityToName } from '../../configs/entities';
import { getSwapiRoute } from '../../configs/routes';
import { sortPopularItems, usePopularItems } from '../../providers/PopularItemsProvider';

type PopularItemsProps = {
  className?: string;
};

const PopularItems = ({ className = '' }: PopularItemsProps) => {
  const { popularItems } = usePopularItems();
  const sortedPopularItems = React.useMemo(() => sortPopularItems(popularItems), [popularItems]);

  return (
    <div className={`popular-items ${className}`}>
      {sortedPopularItems.map((item) => (
        <Link className="popular-items__item" key={item.url} to={getSwapiRoute(item.url)}>
          <div className="popular-items__item" key={item.url}>
            <div className="popular-items__item__entity">
              {entityToName[item.entity].toUpperCase()}
            </div>
            <div className="popular-items__item__title">{item.title}</div>
            <div className="popular-items__item__views">Total views: {item.totalViews}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PopularItems;
