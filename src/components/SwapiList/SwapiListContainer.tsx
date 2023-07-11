import * as React from 'react';

import './SwapiListContainer.scss';

import { SwapiEntities } from '../../configs/routes';

type SwapiListContainerProps = {
  className?: string;
  children: React.ReactNode;
  entity: SwapiEntities;
};

const SwapiListContainer = ({ className = '', children, entity }: SwapiListContainerProps) => {
  return (
    <div className={`swapi-list-container swapi-list-container--${entity} ${className}`}>
      {children}
    </div>
  );
};

export default SwapiListContainer;
