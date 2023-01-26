import React from "react";
import ReactDOM from "react-dom/client";
import CreateTasks from "./pages/CreateTasks";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import SideMenu from "./pages/SideMenu";
import CreateCategories from "./pages/CreateCategories";
import { ProSidebarProvider } from "react-pro-sidebar";
import TasksReminderRegistry from "./pages/TasksRegistry/TaskReminder";
import Archive from "./pages/TasksRegistry/Archive";
import TasksRegistry from "./pages/TasksRegistry/Task";

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
      <Route path="tasks-registry/task-registry" element={<TasksRegistry />} />
      <Route path="tasks-registry/task-reminder-registry" element={<TasksReminderRegistry />} />
      <Route path="tasks-registry/archive" element={<Archive />} />
      <Route path="/qwe" element={<p className="text-blue text-3xl font-bold underline">qwe</p>} />
    </Route>,
  ),
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
