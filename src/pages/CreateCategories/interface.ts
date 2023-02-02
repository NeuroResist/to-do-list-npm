import { ICategory } from "interface";

export interface IStateCategory {
  categories: ICategory[];
  setCategories: (data: any) => void;
}

export interface INextId {
  categoriesId: number;
  setCategoriesId: (data: number) => void;
}

export interface ICategories {
  categories: ICategory[];
  deleteCategory: ({ id }: { id: number }) => void;
  changeCategory: ({ value, id }: IChangeCategory) => void;
}

export interface IChangeCategory {
  value: string;
  id: number;
}
