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
  /** @param isDeleted - Удалена ли Таска, boolean */
  isDeleted: boolean;
  /** @param userName - Уникальный ник аккаунта */
  userName: string;
  /** @param taskStatus - Статус таски */
  taskStatus?: "Удалено" | "В работе" | "Просрочено";
  /** @param createDate - Дата создания таски */
  createDate: string;
  /** @param updateDate - Дата изменение таски */
  updateDate?: string;
}

export interface IChangeTaskFx extends ITask {
  /** @param isToDelete - Нужно ли переместить Таску в Удаленные */
  isToDelete?: boolean;
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
  toastType: "category" | "changeCreate" | "delete";
  /** @param data - Информация для действия в Toast */
  data?: "change" | "delete" | "create" | boolean | registryType;
}

export interface IOptions {
  /** @param value - Значение категории - селекта (равно label) */
  value: string;
  /** @param label - Название категории - селекта (равно value) */
  label: string;
}

export interface IMyProfile {
  /** @param iconPath - Путь к иконке Профиля */
  iconPath: string;
  /** @param name - Имя Профиля */
  name: string;
  /** @param email - Email профиля */
  email: string;
  /** @param userName - Уникальный ник аккаунта */
  userName: string;
}

export interface IChangedTaskStatus {
  /** @param isToDelete - Нужно ли переместить Таску в Удаленные */
  isToDelete?: boolean;
  /** @param isDeleted - Удалена ли Таска, boolean */
  isDeleted: boolean;
  /** @param calendar - Выбранная Дата для Напоминалки */
  calendar?: Date;
}

export interface IStatuse {
  /** @param label - Название статус */
  label: "Удалено" | "В работе" | "Просрочено";
  /** @param color - Цвет статуса */
  color: string;
}

export interface IFilterTask {
  /** @param tasks - Массив Тасков */
  tasks: ITask[];
  /** @param categories - Массив Категорий */
  categories: ICategory[];
  /** @param filter - Параметры для фильтрации Тасков */
  filter?: {
    filterCalendar: Date;
    filterStatus: { value: string; label: string };
    filterCategory: { value: string; label: string };
  };
}
