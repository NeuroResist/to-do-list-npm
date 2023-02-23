import { MutableRefObject } from "react";
import { SubmitHandler } from "react-hook-form";

import { ICategory } from "interface";
import { IOnSubmit } from "pages/TasksRegistry/types";

export interface IToDoForm {
  categories: ICategory[];
  onSubmit: (data: IOnSubmit) => SubmitHandler<IOnSubmit>;
  className?: string;
  setIsModalOpen?: (isHide: boolean) => void;
  isModalOpen?: boolean;
  refModal?: MutableRefObject<any>;
  changeTask?: any;
}
