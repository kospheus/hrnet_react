import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './pages/home/home';
import EmployeeList from './pages/employee-list/employee-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/employee-list",
    element: <EmployeeList />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


