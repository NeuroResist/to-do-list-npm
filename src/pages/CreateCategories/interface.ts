import { ICategory } from "interface";

export interface IStateCategory {
  categories: ICategory[];
  setCategories: (
    categories: ((categories: ICategory[]) => (ICategory | undefined)[]) | ICategory[],
  ) => void;
  categoriesId: number;
  setCategoriesId: (id: number) => void;
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
