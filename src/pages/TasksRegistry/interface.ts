import { ICategory, ITask } from "interface";
import { registryType } from "types";

export interface IFilteredTasksForSections {
  taskReminder: ITask[];
  task: ITask[];
  archive: ITask[];
  withoutCategory: ITask[];
}

export interface ITasksWithoutCategory {
  filterTasks: IFilteredTasksForSections;
  registryType: registryType;
}

export interface ITasksWithCategory extends ITasksWithoutCategory {
  categories: ICategory[];
}
