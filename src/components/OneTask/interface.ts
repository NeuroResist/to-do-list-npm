export interface ITasksList {
  add: number;
  description: any;
  Calendar: any;
  Select: any;
  id: any;
}

export interface IOneTask extends ITasksList {
  registryType: any;
  isView?: any;
  className?: string;
}
