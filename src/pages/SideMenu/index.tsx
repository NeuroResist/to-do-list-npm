import React, { useEffect, useMemo, useRef, useState } from "react";
import { Outlet } from "react-router";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CategoryIcon from "@mui/icons-material/Category";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import ModalHelpSections from "./ModalHelpSections/ModalHelpSections";
import MyProfile from "./MyProfile";

import { checkOutsideClick, filteredCategory, filteredTask } from "helpers";

import { OPTIONS, TASKS } from "MOCK";

function SideMenu() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(filteredCategory(OPTIONS));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCategories = useMemo(() => filteredCategory(categories), [categories]);
  const filterTasks = useMemo(() => filteredTask(tasks, categories), [tasks, categories]);
  const refModal = useRef<any>(null);

  const checkOutsideClickModal = (e: any) =>
    checkOutsideClick({ e, refModal, setIsModalOpen, isModalOpen });

  useEffect(() => {
    document.addEventListener("mousedown", checkOutsideClickModal);

    return () => {
      document.removeEventListener("mousedown", checkOutsideClickModal);
    };
  }, [isModalOpen]);

  return (
    <div className="flex min-h-screen">
      <div className="min-w-[300px] bg-light-blue shrink-0 p-3">
        <MyProfile
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          icon={"./me.jpg"}
          name={"Ярослав Орлов"}
          email={"pataponchik3@gmail.com"}
        />

        {isModalOpen && (
          <ModalHelpSections
            refModal={refModal}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}

        <div className="flex flex-col relative">
          <Sidebar width="360px" backgroundColor="rgb(188, 243, 255)" className="!border-r-0">
            <Menu>
              <MenuItem
                icon={<AssignmentTurnedInIcon />}
                className="border-b-2 border-b-black"
                component={<Link to="/create-tasks" />}
              >
                Создание Тасков
              </MenuItem>
              <MenuItem
                icon={<CategoryIcon />}
                className="border-b-2 border-b-black"
                component={<Link to="/create-categories" />}
              >
                Создание/редактор Категорий
              </MenuItem>
              <SubMenu label="Реестр задач" icon={<ListAltIcon />}>
                <MenuItem
                  className="bg-menu-item"
                  component={<Link to="/tasks-registry/task-registry" />}
                >
                  Заметки
                </MenuItem>
                <MenuItem
                  className="bg-menu-item"
                  component={<Link to="/tasks-registry/task-reminder-registry" />}
                >
                  Напоминания
                </MenuItem>
                <MenuItem
                  className="bg-menu-item"
                  component={<Link to="/tasks-registry/archive" />}
                >
                  Архив
                </MenuItem>
                <MenuItem
                  className="bg-menu-item"
                  component={<Link to="/tasks-registry/without-category" />}
                >
                  Без категории
                </MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>
        </div>
      </div>

      <div className="w-full bg-background p-5 relative">
        <Outlet
          context={{
            tasks,
            setTasks,
            categories: filteredCategories,
            setCategories,
            filterTasks,
          }}
        />
      </div>
    </div>
  );
}

export default SideMenu;
