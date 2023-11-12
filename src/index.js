import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store/store';
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
], {
  basename: process.env.PUBLIC_URL,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);


