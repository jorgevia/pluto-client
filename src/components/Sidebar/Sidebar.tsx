import { Link, useLocation } from 'react-router-dom';

import './Sidebar.scss';

import { entityToName } from '../../configs/entities';
import { swapiRoutes } from '../../configs/routes';
import { usePrefetch } from '../../store/slices/apiSlice';

type SidebarProps = {
  className?: string;
};

const Sidebar = ({ className = '' }: SidebarProps) => {
  const { pathname } = useLocation();
  const actualRoute = pathname.slice(1);
  const prefetch = usePrefetch('getEntity');
  return (
    <aside className={`sidebar ${className}`} data-testid={'sidebar'}>
      <header className="sidebar__header">
        <div className="sidebar__header__logo">
          <Link to="/">
            <img src="/star-wars-logo.png" alt="Star Wars Logo" />
          </Link>
        </div>
      </header>
      <nav className="sidebar__nav">
        <ul className="sidebar__nav__wrapper">
          {swapiRoutes.map((route) => (
            <li className="sidebar__nav__wrapper__item" key={route}>
              <Link
                onMouseEnter={() => prefetch({ entity: route, page: 1 })}
                className={`sidebar__nav__wrapper__item__link ${
                  actualRoute === route ? 'sidebar__nav__wrapper__item__link--active' : ''
                }`}
                to={route}>
                {entityToName[route]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
