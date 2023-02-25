import { toast } from "react-toastify";

import { ICategory, ICheckOutsideClick, IToastTasks } from "./interface";

// Определение, был ли клик снаружи от элемента
export const checkOutsideClick = ({
  e,
  refModal,
  setIsModalOpen,
  isModalOpen,
}: ICheckOutsideClick) => {
  if (refModal?.current && !refModal.current.contains(e.target))
    setIsModalOpen && setIsModalOpen(!isModalOpen);
};

// Тост и Текст к ней
export const toastTasks = ({ toastType, data }: IToastTasks) => {
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

// Фильтрация Категорий по алфавиту
export const filteredCategory = (categories: ICategory[]) =>
  categories.sort((categoryPrev: ICategory, categoryNext: ICategory) =>
    categoryPrev.value.localeCompare(categoryNext.value),
  );
