export interface IChangeTask {
  add: any;
  description: string;
}

export interface IFilteredTasks {
  Calendar: any;
  Select: { value: string; label: string };
  isArchived: boolean;
}
