import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Feed from '../pages/Client/Feed';

import MainLayout from './../layouts/MainLayout';

const Login = lazy(() => import('../pages/Auth/Login'));
const Register = lazy(() => import('../pages/Auth/Register'));

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
