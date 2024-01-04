import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {setupStore} from "./store";

const store = setupStore()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/settings",
    element: <App/>,
  },
  {
    path: "/source",
    element: <App/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
