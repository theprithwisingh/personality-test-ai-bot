import React from 'react';
import { useRoutes } from 'react-router-dom';

// Import your pages
import Home from '../pages/Home';
import TakeTest from '../pages/TakeTest';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/take-test', element: <TakeTest /> },
    { path: '/Dashboard', element: <Dashboard /> },

  ]);

  return routes;
};

export default AppRoutes;
