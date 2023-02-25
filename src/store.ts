// Засунуть tasks categories filterTasks в localStorage
import { createEvent, createStore } from "effector";
import { OPTIONS, TASKS } from "./MOCK";
import { ICategory } from "./interface";

export const createCategoryStore = createEvent<any>();
export const changeCategoryStore = createEvent<any>();
export const deleteCategoryStore = createEvent<any>();

export const $categories = createStore(OPTIONS)
  .on(createCategoryStore, (categories, value) => [...categories, { value: value, label: value }])
  .on(changeCategoryStore, (categories, stores) => {
    console.log(stores);
    return stores;
  })
  .on(deleteCategoryStore, (categories, value) => value);

export const $tasks = createStore(OPTIONS);
