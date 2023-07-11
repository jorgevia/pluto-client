import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.scss';

import { SwapiEntities, swapiRoutes } from './configs/routes';
import { Entity } from './pages/Entity/Entity';
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <div>Dashboard</div>
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
