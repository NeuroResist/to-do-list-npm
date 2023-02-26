import { registryType } from "types";
import { ITask } from "interface";

export interface ITasksList {
  /** @param tasks - Массив Тасков */
  tasks: ITask[];
  /** @param registryType - Один из 4х видов карточки */
  registryType: registryType;
}
