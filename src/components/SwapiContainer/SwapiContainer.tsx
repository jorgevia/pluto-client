import * as React from 'react';

import './SwapiContainer.scss';

import { SwapiEntities } from '../../configs/routes';

type SwapiContainerProps = {
  className?: string;
  children: React.ReactNode;
  entity: SwapiEntities;
};

const SwapiContainer = ({ className = '', children, entity }: SwapiContainerProps) => {
  return (
    <div className={`swapi-container swapi-container--${entity} ${className}`}>{children}</div>
  );
};

export default SwapiContainer;
