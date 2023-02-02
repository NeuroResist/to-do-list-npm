import { registryTypes } from "./types";

export interface ITask {
  id: number;
  add: any;
  description: string;
  Calendar: any;
  Select: { value: string; label: string };
  isArchived: boolean;
  registryType?: registryTypes;
}

export interface ICategory {
  id: number;
  select: { value: string; label: string };
}

export interface IOutlet {
  tasks: ITask[];
  setTasks: (data: any) => void;
  categories: ICategory[];
  setCategories: (data: any) => void;
}
