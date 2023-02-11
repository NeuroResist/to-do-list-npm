import React, { useState } from "react";
import { Outlet } from "react-router";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CategoryIcon from "@mui/icons-material/Category";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import { OPTIONS, TASKS } from "MOCK";

function SideMenu() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(OPTIONS);
  const [categoriesId, setCategoriesId] = useState(categories.length + 1);

  return (
    <div className="flex min-h-screen">
      <div className="min-w-[300px] bg-[#bcf3ff] shrink-0 p-3">
        <figure className="flex mb-2">
          <img className="rounded-full" src="./me.jpg" alt="account" />
          <div className="p-2">
            <figcaption className="font-bold">Орлов Ярослав</figcaption>
            <address className="text-sm text-[#0F0]">
              <a href="mailto:pataponchik3@gmail.com">pataponchik3@gmail.com</a>
            </address>
          </div>
        </figure>

        <div className="flex flex-col relative">
          <Sidebar width="360px" backgroundColor="rgb(188, 243, 255)" className="!border-r-0">
            <Menu>
              <MenuItem
                icon={<AssignmentTurnedInIcon />}
                className="border-b-2 border-b-green"
                component={<Link to="/create-tasks" />}
              >
                Создание Тасков
              </MenuItem>
              <MenuItem
                icon={<CategoryIcon />}
                className="border-b-2 border-b-green"
                component={<Link to="/create-categories" />}
              >
                Создание/редактор Категорий
              </MenuItem>
              <SubMenu label="Реестр задач" icon={<ListAltIcon />}>
                <MenuItem
                  className="bg-[#bcf3ff]/[0.7]"
                  component={<Link to="/tasks-registry/task-registry" />}
                >
                  Заметки
                </MenuItem>
                <MenuItem
                  className="bg-[#bcf3ff]/[0.7]"
                  component={<Link to="/tasks-registry/task-reminder-registry" />}
                >
                  Напоминания
                </MenuItem>
                <MenuItem
                  className="bg-[#bcf3ff]/[0.7]"
                  component={<Link to="/tasks-registry/archive" />}
                >
                  Архив
                </MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>
        </div>
      </div>

      <div className="w-full bg-[#F9F6EE] p-5">
        <Outlet
          context={{ tasks, setTasks, categories, setCategories, categoriesId, setCategoriesId }}
        />
      </div>
    </div>
  );
}

export default SideMenu;
