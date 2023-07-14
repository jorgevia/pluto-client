import * as React from 'react';

import './Dashboard.scss';

import PopularItems from '../../components/PopularItems/PopularItems';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <img
          className="dashboard__header__logo"
          src="/star-wars-logo-big.png"
          alt="Star Wars logo"
        />
        <h3 className="dashboard__header__copy">Welcome to the Star Wars site</h3>
      </header>
      <div className="dashboard__content">
        <h5 className="dashboard__content__title">POPULAR ITEMS</h5>
        <PopularItems className="dashboard__content__popular-items" />
      </div>
    </div>
  );
};

export default Dashboard;
