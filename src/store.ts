import { persist } from "effector-storage/local";
import { createEvent, createStore } from "effector";
import { isEmpty } from "lodash";

import { filteredCategory } from "./helpers";

import { OPTIONS, TASKS } from "./MOCK";

import { IAddTaskFx, ICategory, IChangeCategoryFx, IChangeTaskFx, ITask } from "./interface";

export const addTaskFx = createEvent<any>();
export const changeTaskFx = createEvent<any>();

export const createCategoryFx = createEvent<any>();
export const changeCategoryFx = createEvent<any>();
export const deleteCategoryFx = createEvent<any>();

export const $categories = createStore(filteredCategory(OPTIONS))
  .on(createCategoryFx, (categories, value: string) => [
    ...categories,
    { value: value, label: value },
  ])
  .on(changeCategoryFx, (categories, { changingCategory, value }: IChangeCategoryFx) =>
    categories.map((category: ICategory) =>
      category.value === changingCategory ? { value: value, label: value } : category,
    ),
  )
  .on(deleteCategoryFx, (categories, value: string) =>
    categories
      .map((category: ICategory) =>
        category.value === value ? { value: "", label: "" } : category,
      )
      .filter((category) => !isEmpty(category.value)),
  );

// ТАСКИ
export const $tasks = createStore(TASKS)
  .on(addTaskFx, (tasks, { id, data }: IAddTaskFx) => [
    ...tasks,
    {
      id: id,
      name: data.name,
      description: data.description,
      calendar: data.calendar,
      select: data.select,
      isArchived: false,
    },
  ])
  .on(
    changeTaskFx,
    (tasks, { id, description, name, calendar, select, isToArchive, isArchived }: IChangeTaskFx) =>
      tasks.map((task: ITask) =>
        task.id === id
          ? {
              id: id,
              name: name ?? task.name,
              description: description ?? task.description,
              calendar: calendar ?? task.calendar,
              select: select ?? task.select,
              isArchived: isToArchive ? !isArchived : task.isArchived,
            }
          : task,
      ),
  );

// Занесение Сторов в localStorage
persist({ store: $categories, key: "categories" });
persist({ store: $tasks, key: "tasks" });
