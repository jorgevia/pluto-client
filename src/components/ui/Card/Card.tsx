import * as React from 'react';

import './Card.scss';

type CardProps = {
  className?: string;
  children: React.ReactNode;
  title: string | React.ReactNode;
  collapsed?: boolean;
  onHover?: () => void;
};

const Card = ({ className = '', children, title, collapsed = false, onHover }: CardProps) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  const expandIcon = isCollapsed ? 'expand_less' : 'expand_more';

  return (
    <div className={`card ${className}`}>
      <header
        onMouseEnter={onHover}
        className="card__header"
        onClick={() => setIsCollapsed((prevValue) => !prevValue)}>
        <h1 className="card__header__title">{title}</h1>
        <i className="material-icons card__header__expand-icon">{expandIcon}</i>
      </header>
      {isCollapsed && <div className="card__content">{children}</div>}
    </div>
  );
};

export default Card;
