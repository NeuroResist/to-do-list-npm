import { ITask } from "interface";
import { registryTypes } from "types";

export interface IOneTask extends ITask {
  registryType?: registryTypes;
  isView?: boolean;
  className?: string;
}
