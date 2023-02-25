import React, { useEffect, useMemo, useRef, useState } from "react";
import { Outlet } from "react-router";

import ModalHelpSections from "./ModalHelpSections/ModalHelpSections";
import MyProfile from "./MyProfile";
import SidebarMenu from "./Menu";

import { checkOutsideClick, filteredCategory, filteredTask } from "helpers";

import { OPTIONS, TASKS } from "MOCK";
import { $categories } from "../../store";
import { useStore } from "effector-react";

function SideMenu() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(filteredCategory(OPTIONS));
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    //console.log(tasks);
  }, [tasks]);
  console.log(useStore($categories));

  const filteredCategories = useMemo(() => filteredCategory(categories), [categories]);
  const filterTasks = useMemo(() => filteredTask(tasks, categories), [tasks, categories]);
  const refModal = useRef<any>(null);

  const checkOutsideClickModal = (e: any) =>
    checkOutsideClick({ e, refModal, setIsModalOpen, isModalOpen });

  document.body.style.overflow = isModalOpen ? "hidden" : "auto";

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

        <SidebarMenu />
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
