import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Home.scss';

import { useGetPeopleQuery } from '../../store/slices/apiSlice';
import { routesUrls } from '../../types/routes';

type HomeProps = {
  className?: string;
};

export const Home = ({ className = '' }: HomeProps) => {
  return (
    <>
      <aside>
        <header>Logo</header>
        <nav>
          {Object.values(routesUrls).map((route) => (
            <div key={route}>
              <Link to={route}>{route}</Link>
            </div>
          ))}
        </nav>
      </aside>
      <div className={`home ${className}`}>
        <Outlet />
      </div>
    </>
  );
};
