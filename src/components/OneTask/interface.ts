import { ITask } from "interface";
import { registryType } from "types";

export interface IOneTask extends ITask {
  registryType?: registryType;
  isView?: boolean;
  className?: string;
}
