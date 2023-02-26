import { MutableRefObject } from "react";

import { IFilteredTasksForSections } from "./pages/TasksRegistry/interface";
import { registryType } from "./types";

export interface ITask {
  /** @param id - Айди Таски */
  id: number;
  /** @param name - Имя Таски */
  name: string;
  /** @param description - Описание Таски */
  description: string;
  /** @param calendar - Выбранная Дата для Напоминалки */
  calendar?: Date;
  /** @param select - Выбранная Категория */
  select: { value: string; label: string };
  /** @param isArchived - Архивированна ли Таска, boolean */
  isArchived: boolean;
}

export interface IChangeTaskFx extends ITask {
  /** @param isToArchive - Нужно ли переместить Таску в Архив */
  isToArchive?: boolean;
}

export interface ICategory {
  /** @param value - Значение Категории */
  value: string;
  /** @param label - Название Категории */
  label: string;
}

export interface IAddTaskFx {
  /** @param id - Айди таски */
  id: number;
  /** @param data - Таска */
  data: ITask;
}

export interface IChangeCategoryFx {
  /** @param changingCategory - Значение изменяемой Категории */
  changingCategory: string;
  /** @param value - Значение для измененной Категории */
  value: string;
}

export interface IOutlet {
  /** @param tasks - Массив Тасков */
  tasks: ITask[];
  /** @param categories - Массив Категорий */
  categories: ICategory[];
  /** @param setCategories - Задание нового массива Тасков */
  setCategories: (data: ICategory) => void;
  /** @param filterTasks - Отфильтрованные Таски */
  filterTasks: IFilteredTasksForSections;
}

export interface ICheckOutsideClick {
  /** @param e - Event */
  e: any;
  /** @param refModal - Ссылка на модалку */
  refModal: MutableRefObject<any> | undefined;
  /** @param setIsModalOpen - Функция для изменения состояния модалки, boolean */
  setIsModalOpen: (isModalOpen: boolean) => void;
  /** @param isModalOpen - Открыта ли сейчас модалка, boolean */
  isModalOpen: boolean;
}

export interface IToastTasks {
  /** @param toastType - Тип Таски в Toast */
  toastType: "category" | "changeCreate" | "archive";
  /** @param data - Информация для действия в Toast */
  data?: "change" | "delete" | "create" | boolean | registryType;
}
