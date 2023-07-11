import { Outlet } from 'react-router-dom';

import './Home.scss';

import Sidebar from '../../components/Sidebar/Sidebar';

type HomeProps = {
  className?: string;
};

export const Home = ({ className = '' }: HomeProps) => {
  return (
    <div className="home">
      <Sidebar className="home__sidebar" />
      <div className={`home__content ${className}`}>
        <Outlet />
      </div>
    </div>
  );
};
