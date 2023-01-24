import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import CreateTasks from "./pages/CreateTasks";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import SideMenu from "./pages/SideMenu";
import TasksRegistry from "./pages/TasksRegistry";
import CreateCategories from "./pages/CreateCategories";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideMenu />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <p>Нажмите на один из пунктов слева</p> },
      {
        path: "create-tasks",
        element: <CreateTasks />,
      },
      {
        path: "create-categories",
        element: <CreateCategories />,
      },
      {
        path: "tasks-registry",
        element: <TasksRegistry />,
      },
      {
        path: "/qwe",
        element: <p className="text-blue text-3xl font-bold underline">qwe</p>,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
