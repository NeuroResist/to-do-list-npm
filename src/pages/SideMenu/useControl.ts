import { useEffect, useMemo, useRef, useState } from "react";
import { useStore } from "effector-react";

import { $categories, $tasks } from "store";

import { checkOutsideClick } from "helpers";

import { ICategory, ITask } from "interface";
import { IFilteredTasksForSections } from "../TasksRegistry/interface";

function UseControl() {
  const tasks = useStore($tasks);
  const categories = useStore($categories);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Фильтрация Тасков по 4 категориям для отрисовки в реестре
  const filteredTask = (tasks: ITask[], categories: ICategory[]): IFilteredTasksForSections => {
    const filterTasksForSections = (taskType: string) =>
      tasks.filter(({ isDeleted, calendar, select }: ITask) => {
        if (calendar && !isDeleted && taskType === "taskReminder") return true;
        if (!calendar && !isDeleted && taskType === "task") return true;
        if (isDeleted && taskType === "delete") return true;
        if (
          taskType === "withoutCategory" &&
          categories.filter((category: ICategory) => category?.value === select?.value).length === 0
        )
          return true;
      });

    return {
      taskReminder: filterTasksForSections("taskReminder"),
      task: filterTasksForSections("task"),
      delete: filterTasksForSections("delete"),
      withoutCategory: filterTasksForSections("withoutCategory"),
    };
  };

  const filterTasks = useMemo(() => filteredTask(tasks, categories), [tasks, categories]);
  const refModal = useRef<any>(null);

  // При открытой модалке нельзя скроллить страницу
  document.body.style.overflow = isModalOpen ? "hidden" : "auto";

  useEffect(() => {
    document.addEventListener("mousedown", checkOutsideClickModal);

    return () => {
      document.removeEventListener("mousedown", checkOutsideClickModal);
    };
  }, [isModalOpen]);

  const checkOutsideClickModal = (e: any) =>
    checkOutsideClick({ e, refModal, setIsModalOpen, isModalOpen });

  return { isModalOpen, setIsModalOpen, filterTasks, refModal };
}

export default UseControl;
