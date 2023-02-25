import { ICategory } from "interface";

export interface ICategories {
  categories: ICategory[];
  changeCategory: ({ value }: { value: string }) => void;
}
