export interface ICategory {
  id: number;
  select: { value: string; label: string };
}

export interface ICategories {
  categories: ICategory[];
  deleteCategory: ({ id }: { id: number }) => void;
  changeCategory: ({ value, id }: IChangeCategory) => void;
}

export interface IChangeCategory {
  value: any;
  id: number;
}
