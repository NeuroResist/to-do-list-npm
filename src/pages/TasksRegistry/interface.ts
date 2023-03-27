import { ICategory, ITask } from "interface";
import { RegistryType } from "types";

export interface IFilteredTasksForSections {
  /** @param taskReminder - Массив Напоминаний */
  taskReminder: ITask[];
  /** @param task - Массив Заметок */
  task: ITask[];
  /** @param delete - Массив Удаленных Тасков */
  delete: ITask[];
  /** @param withoutCategory - Массив Тасков без Категории */
  withoutCategory: ITask[];
}

export interface ITasksWithoutCategory {
  /** @param filterTasks - Отфильтрованные Таски */
  filterTasks: IFilteredTasksForSections;
  /** @param registryType - Один из 4х видов карточки */
  registryType: RegistryType;
  /** @param filter - Условия для фильтрации по 3м параметрам */
  filter?: any;
}

export interface ITasksWithCategory extends ITasksWithoutCategory {
  /** @param categories - Массив Категорий */
  categories: ICategory[];
}
