import { Link } from 'react-router-dom';

import './Sidebar.scss';

import { entityToName } from '../../configs/entities';
import { swapiRoutes } from '../../configs/routes';

type SidebarProps = {
  className?: string;
};

const Sidebar = ({ className = '' }: SidebarProps) => {
  return (
    <aside className={`sidebar ${className}`}>
      <header className="sidebar__header">
        <div className="sidebar__header__logo">
          <img src="/star-wars-logo.png" alt="Star Wars Logo" />
        </div>
      </header>
      <nav className="sidebar__nav">
        <ul className="sidebar__nav__wrapper">
          {swapiRoutes.map((route) => (
            <li className="sidebar__nav__wrapper__item" key={route}>
              <Link className="sidebar__nav__wrapper__item__link" to={route}>
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
