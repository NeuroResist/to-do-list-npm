import { ICategory } from "interface";

export interface IStateCategory {
  categories: ICategory[];
  setCategories: (
    categories: ((categories: ICategory[]) => (ICategory | undefined)[]) | ICategory[],
  ) => void;
}

export interface ICategories {
  categories: ICategory[];
  deleteCategory: ({ value }: { value: string }) => void;
  changeCategory: ({ value }: { value: string }) => void;
}
