import { ICategory } from "interface";

export interface ICategories {
  /** @param categories - Массив Категорий */
  categories: ICategory[];
  /** @param changeCategory - Функция изменения Категорий */
  changeCategory: (value: string) => void;
}
