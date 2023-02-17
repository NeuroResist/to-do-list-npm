import { registryTypes } from "types";
import { ITask } from "interface";

export interface ITasksList {
  tasks: ITask[];
  registryType: registryTypes;
}
