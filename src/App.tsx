import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.scss';

import { SwapiEntities, swapiRoutes } from './configs/routes';
import Dashboard from './pages/Dashboard/Dashboard';
import { Entity } from './pages/Entity/Entity';
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      ...swapiRoutes.map((route: string) => ({
        path: `${route}/:id?`,
        element: <Entity entity={route as SwapiEntities} />
      }))
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
