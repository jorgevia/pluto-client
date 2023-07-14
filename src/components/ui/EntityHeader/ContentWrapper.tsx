import * as React from 'react';

import './ContentWrapper.scss';

type ContentWrapperProps = {
  children: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
};

const ContentWrapper = ({ rightContent, children, className = '' }: ContentWrapperProps) => {
  return (
    <div className={`content-wrapper ${className}`}>
      <div className="content-wrapper__left-content">{children}</div>
      {rightContent && <div className="content-wrapper__right-content">{rightContent}</div>}
    </div>
  );
};

export default ContentWrapper;
