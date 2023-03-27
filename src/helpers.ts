import dayjs from "dayjs";
import { toast } from "react-toastify";

import { ICategory, ICheckOutsideClick, IFilterTask, ITask, IToastTasks } from "./interface";
import { IFilteredTasksForSections } from "./pages/TasksRegistry/interface";

// Определение, был ли клик снаружи от элемента
export const checkOutsideClick = (props: ICheckOutsideClick) => {
  const { e, refModal, setIsModalOpen, isModalOpen } = props;

  if (refModal?.current && !refModal.current.contains(e.target))
    setIsModalOpen && setIsModalOpen(!isModalOpen);
};

// Тост и Текст к ней
export const toastTasks = (props: IToastTasks) => {
  const { toastType, data } = props;

  let text = "";

  if (toastType === "delete") {
    text =
      data === "task"
        ? "Заметка была перенесена в удаленные!"
        : data === "taskReminder"
        ? "Напоминание была перенесена в удаленные!"
        : "Таска была восстановлена";
  }

  if (toastType === "changeCreate") {
    text = data ? "Таска была изменена!" : "Создана новая Таска!";
  }

  if (toastType === "category") {
    text =
      data === "delete"
        ? "Категория была удалена!"
        : data === "change"
        ? "Категория была изменена!"
        : "Создана новая Категория!";
  }

  toast(text, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: 0,
    theme: "light",
  });
};

// Фильтрация тасков для отображения в реестре
export const filterTask = (props: IFilterTask): IFilteredTasksForSections => {
  const { tasks, categories, filter } = props;

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

  const ConditionFilteredTasks = (taskType: string) => {
    let tasks = filterTasksForSections(taskType);

    if (Boolean(filter?.filterCalendar))
      tasks = tasks.filter((task: ITask) =>
        dayjs(task?.calendar).isSame(dayjs(filter?.filterCalendar)),
      );

    if (filter?.filterCategory?.value !== "Все" && Boolean(filter?.filterCategory?.value))
      tasks = tasks.filter((task: ITask) => task?.select?.value === filter?.filterCategory?.value);

    if (filter?.filterStatus?.value !== "Все" && Boolean(filter?.filterStatus?.value))
      tasks = tasks.filter((task: ITask) => task?.taskStatus === filter?.filterStatus?.value);

    return tasks;
  };

  return {
    taskReminder: ConditionFilteredTasks("taskReminder"),
    task: ConditionFilteredTasks("task"),
    delete: ConditionFilteredTasks("delete"),
    withoutCategory: ConditionFilteredTasks("withoutCategory"),
  };
};
