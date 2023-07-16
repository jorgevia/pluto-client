import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.scss';

import Spinner from './components/ui/Spinner/Spinner';
import { SwapiEntities, swapiRoutes } from './configs/routes';
import { Home } from './pages/Home';

const Entity = React.lazy(async () => await import('./pages/Entity/Entity'));
const Dashboard = React.lazy(async () => await import('./pages/Dashboard/Dashboard'));

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
  return (
    <React.Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
};

export default App;
