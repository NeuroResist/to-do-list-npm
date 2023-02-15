// Фильтрация всех Тасков в объект с 3-мя категориями
import { ITask } from "./interface";
import { toast } from "react-toastify";

export const filteredTask = (tasks: any, categories: any) => {
  const filterTasks = (taskType: string) =>
    tasks.filter(({ isArchived, Calendar, Select }: any) => {
      console.log();
      if (Calendar && !isArchived && taskType === "taskReminder") return true;
      if (!Calendar && !isArchived && taskType === "task") return true;
      if (isArchived && taskType === "archive") return true;
      if (
        taskType === "withoutCategory" &&
        categories.filter((category: any) => category.select.value === Select.value).length === 0
      )
        return true;
    });

  return {
    taskReminder: filterTasks("taskReminder"),
    task: filterTasks("task"),
    archive: filterTasks("archive"),
    withoutCategory: filterTasks("withoutCategory"),
  };
};

// Определение, был ли клик снаружи от элемента
export const checkOutsideClick = ({ e, refModal, setIsModalOpen, isModalOpen }: any) => {
  if (refModal?.current && !refModal.current.contains(e.target))
    setIsModalOpen && setIsModalOpen(!isModalOpen);
};

// Тост и Текст к ней
export const toastTasks = ({ toastType, data }: any) => {
  let text = "";

  if (toastType === "archive") {
    text =
      data === "task"
        ? "Заметка была перенесена в архив!"
        : data === "taskReminder"
        ? "Напоминалка была перенесена в архив!"
        : "Таска была разархивирована";
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

// Занесение и вынесение Таски из архива
export const toArchive = ({ id, setTasks, isArchived }: any) => {
  setTasks((tasks: ITask[]) =>
    tasks.map((task: ITask) =>
      task.id === id
        ? {
            id: id,
            add: task.add,
            description: task.description,
            Calendar: task.Calendar,
            Select: task.Select,
            isArchived: !isArchived,
          }
        : task,
    ),
  );
};
