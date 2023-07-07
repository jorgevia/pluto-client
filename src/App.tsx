import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.scss';

import { Home } from './pages/Home';

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
      {
        path: 'people',
        element: <div>People</div>
      },
      {
        path: 'films',
        element: <div>People</div>
      },
      {
        path: 'starships',
        element: <div>People</div>
      },
      {
        path: 'vehicles',
        element: <div>People</div>
      },
      {
        path: 'species',
        element: <div>People</div>
      },
      {
        path: 'planets',
        element: <div>People</div>
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
