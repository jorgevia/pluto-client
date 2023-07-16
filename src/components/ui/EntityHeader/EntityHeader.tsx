import * as React from 'react';

import './EntityHeader.scss';

type EntityHeaderProps = {
  className?: string;
  children: React.ReactNode;
};

const EntityHeader = ({ className = '', children }: EntityHeaderProps) => {
  return <header className={`entity-header ${className}`}>{children}</header>;
};

export default EntityHeader;
