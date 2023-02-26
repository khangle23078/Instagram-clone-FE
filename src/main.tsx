import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/PublicRoute';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<h1>...Loading</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
