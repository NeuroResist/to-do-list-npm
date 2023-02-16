import { ICategory, ITask } from "interface";
import { registryTypes } from "../../types";

export interface IChangeTask {
  add: any;
  description: string;
}

export interface IFilteredTasks {
  taskReminder: ITask[];
  task: ITask[];
  archive: ITask[];
  withoutCategory: ITask[];
}

export interface ITasksWithCategory {
  registryType: registryTypes;
  filterTasks: IFilteredTasks;
  categories: ICategory[];
}
