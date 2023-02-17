import { FormEventHandler, MutableRefObject } from "react";
import { Control, SubmitHandler } from "react-hook-form";

import { ICategory } from "interface";
import { IOnSubmit } from "pages/TasksRegistry/types";

export interface ICreateToDo {
  handleSubmit: (data: any) => FormEventHandler<HTMLFormElement>;
  register: any;
  control: Control<IOnSubmit>;
  categories: ICategory[];
  onSubmit: (data: IOnSubmit) => SubmitHandler<IOnSubmit>;
  className?: string;
  isValid?: boolean;
  setIsModalOpen?: (isHide: boolean) => void;
  isModalOpen?: boolean;
  refModal?: MutableRefObject<any>;
}
