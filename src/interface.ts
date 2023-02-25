import { MutableRefObject } from "react";

import { IFilteredTasks } from "./pages/TasksRegistry/interface";
import { registryTypes } from "./types";

export interface ITask {
  id: number;
  add: string;
  description: string;
  calendar?: Date;
  select: { value: string; label: string };
  isArchived: boolean;
}

export interface IChangeTaskStore extends ITask {
  isToArchive?: boolean;
}

export interface ICategory {
  value: string;
  label: string;
}

export interface IAddTaskStore {
  id: number;
  data: ITask;
}

export interface IChangeCategoryStore {
  changingCategory: { value: string };
  value: string;
}

export interface IOutlet {
  tasks: ITask[];
  categories: ICategory[];
  setCategories: (data: ICategory) => void;
  filterTasks: IFilteredTasks;
}

export interface ICheckOutsideClick {
  e: any;
  refModal: MutableRefObject<any> | undefined;
  setIsModalOpen: (isModalOpen: boolean) => void;
  isModalOpen: boolean;
}

export interface IToastTasks {
  toastType: "category" | "changeCreate" | "archive";
  data?: "change" | "delete" | "create" | boolean | registryTypes;
}
