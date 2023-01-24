export interface IValue {
  value: string;
}

export interface ICategory {
  id: number;
  select: any;
}

export interface ICategories {
  categories: any;
  changeCategory: ({ value, id }: IChangeCategory) => void;
}

interface IChangeCategory {
  value: any;
  id: any;
}
