import React from 'react';
import { useRoutes } from 'react-router-dom';

// Import your pages
import Home from '../pages/Home';
import TakeTest from '../pages/TakeTest';
import Dashboard from '../pages/Dashboard';
import AiBot from '../pages/AiBot';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/take-test', element: <TakeTest /> },
    { path: '/Dashboard', element: <Dashboard /> },
    { path: '/Aibot', element: <AiBot /> },

  ]);

  return routes;
};

export default AppRoutes;
