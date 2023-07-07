import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.scss';

import { Home } from './pages/Home';
import { routesUrls } from './types/routes';
// const TimesheetsApp = React.lazy(async () => await import("timesheets/router"))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <div>Dashboard</div>
      },
      ...Object.values(routesUrls).map((route) => ({
        path: `${route}/:id?`,
        element: <div>Entities</div>
      }))
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
