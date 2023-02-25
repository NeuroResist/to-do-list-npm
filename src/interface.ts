import { MutableRefObject } from "react";

import { IFilteredTasksForSections } from "./pages/TasksRegistry/interface";
import { registryType } from "./types";

export interface ITask {
  id: number;
  add: string;
  description: string;
  calendar?: Date;
  select: { value: string; label: string };
  isArchived: boolean;
}

export interface IChangeTaskFx extends ITask {
  isToArchive?: boolean;
}

export interface ICategory {
  value: string;
  label: string;
}

export interface IAddTaskFx {
  id: number;
  data: ITask;
}

export interface IChangeCategoryFx {
  changingCategory: string;
  value: string;
}

export interface IOutlet {
  tasks: ITask[];
  categories: ICategory[];
  setCategories: (data: ICategory) => void;
  filterTasks: IFilteredTasksForSections;
}

export interface ICheckOutsideClick {
  e: any;
  refModal: MutableRefObject<any> | undefined;
  setIsModalOpen: (isModalOpen: boolean) => void;
  isModalOpen: boolean;
}

export interface IToastTasks {
  toastType: "category" | "changeCreate" | "archive";
  data?: "change" | "delete" | "create" | boolean | registryType;
}
