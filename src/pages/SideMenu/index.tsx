import React, { useEffect, useMemo, useRef, useState } from "react";
import { Outlet } from "react-router";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CategoryIcon from "@mui/icons-material/Category";
import CloseIcon from "@mui/icons-material/Close";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import OrangeText from "components/OrangeText";

import { OPTIONS, TASKS } from "MOCK";
import { checkOutsideClick, filteredTask } from "helpers";

function SideMenu() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(OPTIONS);
  const [categoriesId, setCategoriesId] = useState(categories.length + 1);
  const filterTasks = useMemo(() => filteredTask(tasks), [tasks.length]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        <figure className="flex mb-2 relative">
          <img className="rounded-full" src="./me.jpg" alt="account" />
          <div className="p-2">
            <figcaption className="font-bold">Орлов Ярослав</figcaption>

            <HelpOutlineIcon
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="absolute top-0 right-0 cursor-pointer"
              fontSize="large"
            />

            <address className="text-sm text-[#0F0]">
              <a href="mailto:pataponchik3@gmail.com">pataponchik3@gmail.com</a>
            </address>
          </div>
        </figure>

        {isModalOpen && (
          <div className="absolute flex left-0 items-center justify-center top-0 h-full w-full bg-gray-dark/[0.5] z-10">
            <section
              ref={refModal}
              className="flex-col relative flex bg-light-blue h-[50%] w-[40%] rounded-2xl p-2"
            >
              <CloseIcon
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="absolute top-2 right-2 cursor-pointer"
              />
              <h2 className="font-bold self-center mb-3">Подсказки</h2>
              <ul className="mb-3">
                <li>
                  <OrangeText>Таска</OrangeText> - и заметки, и напоминалки
                </li>
                <li>
                  <OrangeText>Заметка</OrangeText> - таска без времени
                </li>
                <li>
                  <OrangeText>Напоминалка</OrangeText> - таска со временем
                </li>
              </ul>
              <p className="mb-3">
                Для создания и изменения задачи обязательны поля
                <OrangeText> Название задачи</OrangeText>,<OrangeText> Описание задачи</OrangeText>{" "}
                и<OrangeText> Категория</OrangeText>.
              </p>
              <p>
                Категории могут иметь только <OrangeText> разные названия</OrangeText>.
              </p>
            </section>
          </div>
        )}

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
            categories,
            setCategories,
            categoriesId,
            setCategoriesId,
            filterTasks,
          }}
        />
      </div>
    </div>
  );
}

export default SideMenu;
