import React from "react";
import ReactDOM from "react-dom/client";
import CreateTasks from "./pages/CreateTasks";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./assets/styles/index.css";

import NotFound from "./pages/NotFound";
import SideMenu from "./pages/SideMenu";
import CreateCategories from "./pages/CreateCategories";
import { ProSidebarProvider } from "react-pro-sidebar";
import TasksRegistry from "./pages/TasksRegistry";
import ViewTask from "./pages/ViewTask";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      errorElement={<NotFound />}
      path="/"
      element={
        <ProSidebarProvider>
          <SideMenu />
        </ProSidebarProvider>
      }
    >
      <Route path="create-tasks" element={<CreateTasks />} />
      <Route path="create-categories" element={<CreateCategories />} />

      <Route path="tasks-registry/task-registry" element={<TasksRegistry registryType="task" />} />
      <Route
        path="tasks-registry/task-reminder-registry"
        element={<TasksRegistry registryType="taskReminder" />}
      />
      <Route path="tasks-registry/archive" element={<TasksRegistry registryType="archive" />} />
      <Route path="tasks-registry/:id" element={<ViewTask />} />
    </Route>,
  ),
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
