import { MutableRefObject } from "react";

import { IFilteredTasks } from "./pages/TasksRegistry/interface";
import { registryTypes } from "./types";

export interface ITask {
  id: number;
  add: string;
  description: string;
  calendar: Date | undefined;
  select: { value: string; label: string };
  isArchived: boolean;
}

export interface ICategory {
  value: string;
  label: string;
}

export interface IOutlet {
  tasks: ITask[];
  setTasks: (data: any) => void;
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

export interface IToArchive {
  id: number;
  setTasks: (task: (tasks: ITask[]) => ITask[] | ITask) => void;
  isArchived: boolean;
}

export interface IToastTasks {
  toastType: "category" | "changeCreate" | "archive";
  data: "change" | "delete" | "create" | boolean | registryTypes | undefined;
}
