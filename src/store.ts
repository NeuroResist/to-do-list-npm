// Засунуть tasks categories filterTasks в localStorage

import { createEvent, createStore } from "effector";

import { filteredCategory } from "./helpers";

import { OPTIONS, TASKS } from "./MOCK";

import {
  IAddTaskStore,
  ICategory,
  IChangeCategoryStore,
  IChangeTaskStore,
  ITask,
} from "./interface";
import { isEmpty } from "lodash";

export const addTaskStore = createEvent<any>();
export const changeTaskStore = createEvent<any>();

export const createCategoryStore = createEvent<any>();
export const changeCategoryStore = createEvent<any>();
export const deleteCategoryStore = createEvent<any>();

export const $categories = createStore(filteredCategory(OPTIONS))
  .on(createCategoryStore, (categories, value: string) => [
    ...categories,
    { value: value, label: value },
  ])
  .on(changeCategoryStore, (categories, { changingCategory, value }: IChangeCategoryStore) =>
    categories.map((category: ICategory) =>
      category.value === changingCategory.value ? { value: value, label: value } : category,
    ),
  )
  .on(deleteCategoryStore, (categories, value: string) =>
    categories
      .map((category: ICategory) =>
        category.value === value ? { value: "", label: "" } : category,
      )
      .filter((category) => !isEmpty(category.value)),
  );

// ТАСКИ
export const $tasks = createStore(TASKS)
  .on(addTaskStore, (tasks, { id, data }: IAddTaskStore) => [
    ...tasks,
    {
      id: id,
      add: data.add,
      description: data.description,
      calendar: data.calendar,
      select: data.select,
      isArchived: false,
    },
  ])
  .on(
    changeTaskStore,
    (
      tasks,
      { id, description, add, calendar, select, isToArchive, isArchived }: IChangeTaskStore,
    ) =>
      tasks.map((task: ITask) =>
        task.id === id
          ? {
              id: id,
              add: add ?? task.add,
              description: description ?? task.description,
              calendar: calendar ?? task.calendar,
              select: select ?? task.select,
              isArchived: isToArchive ? !isArchived : task.isArchived,
            }
          : task,
      ),
  );
