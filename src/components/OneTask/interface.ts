export interface ITasksList {
  add: number;
  description: any;
  Calendar: any;
  Select: any;
  id: any;
  isArchived?: boolean;
}

export interface IOneTask extends ITasksList {
  registryType?: any;
  isView?: any;
  className?: string;
}
