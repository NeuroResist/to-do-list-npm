import { MutableRefObject } from "react";

export interface IFilter {
  /** @param refModal - Ссылка на модалку */
  refModal: MutableRefObject<any> | undefined;
  /** @param setFilteredTasks - Нужные в данный момент Таски */
  setFilteredTasks: (data: any) => void;
}
