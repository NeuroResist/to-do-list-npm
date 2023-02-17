import { ICategory, ITask } from "interface";
import { registryTypes } from "types";

export interface IChangeTask {
  add: string;
  description: string;
}

export interface IFilteredTasks {
  taskReminder: ITask[];
  task: ITask[];
  archive: ITask[];
  withoutCategory: ITask[];
}

export interface ITasksWithoutCategory {
  filterTasks: IFilteredTasks;
  registryType: registryTypes;
}

export interface ITasksWithCategory extends ITasksWithoutCategory {
  categories: ICategory[];
}
