import { ITask } from "interface";
import { RegistryType } from "types";

export interface IOneTask extends ITask {
  /** @param registryType - Один из 4х видов карточки */
  registryType?: RegistryType;
  /** @param isView - Является ли отображение карточки в режиме ее просмотра */
  isView?: boolean;
  /** @param className - Стили для контейнера Таски */
  className?: string;
}
