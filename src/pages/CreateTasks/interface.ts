import { ICategory } from "interface";

export interface IUseControl {
  add: string;
  description: string;
  Calendar: Date | undefined;
  Select: { value: "Дом"; label: "Дом" };
}

export interface ICreateToDo {
  handleSubmit: any;
  register: any;
  control: any;
  categories: ICategory[];
  onSubmit: any;
  className?: string;
}
