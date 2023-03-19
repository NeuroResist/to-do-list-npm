import { persist } from "effector-storage/local";
import { createEvent, createStore } from "effector";
import dayjs from "dayjs";
import { isEmpty } from "lodash";

import { filteredCategory } from "./helpers";

import { MY_PROFILE, OPTIONS, TASKS } from "./MOCK";

import {
  IAddTaskFx,
  ICategory,
  IChangeCategoryFx,
  IChangedTaskStatus,
  IChangeTaskFx,
  ITask,
} from "./interface";

export const addTaskFx = createEvent<any>();
export const changeTaskFx = createEvent<any>();

export const createCategoryFx = createEvent<any>();
export const changeCategoryFx = createEvent<any>();
export const deleteCategoryFx = createEvent<any>();

const changedTaskStatus = ({ isToDelete, isDeleted, calendar }: IChangedTaskStatus) => {
  if (isToDelete && isDeleted && calendar) return "Удалено";

  if (calendar) {
    if (dayjs().isBefore(dayjs(calendar))) {
      return "В работе";
    } else {
      return "Просрочено";
    }
  }

  return undefined;
};

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
      userName: data.userName,
      taskStatus: data.taskStatus,
      createDate: data.createDate,
      updateDate: data.updateDate,
      isDeleted: false,
    },
  ])
  .on(
    changeTaskFx,
    (tasks, { id, description, name, calendar, select, isToDelete, isDeleted }: IChangeTaskFx) =>
      tasks.map((task: ITask) =>
        task.id === id
          ? {
              id: id,
              name: name ?? task.name,
              description: description ?? task.description,
              calendar: calendar ?? task.calendar,
              select: select ?? task.select,
              userName: task.userName,
              createDate: task.createDate,
              updateDate: dayjs().format("DD.MM.YYYY, HH:mm [по Мск]"),
              taskStatus: changedTaskStatus({
                isToDelete,
                isDeleted: isToDelete ? !isDeleted : task.isDeleted,
                calendar: calendar ?? task.calendar,
              }),
              isDeleted: isToDelete ? !isDeleted : task.isDeleted,
            }
          : task,
      ),
  );

// Нынешний пользователь
export const $user = createStore(MY_PROFILE[0].userName);

// Занесение Сторов в localStorage
persist({ store: $categories, key: "categories" });
persist({ store: $tasks, key: "tasks" });
