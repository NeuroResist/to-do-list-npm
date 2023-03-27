import { MutableRefObject } from "react";
import { SubmitHandler } from "react-hook-form";

import { ICategory } from "interface";
import { IOnSubmit } from "pages/TasksRegistry/types";

export interface IToDoForm {
  /** @param categories - Массив Категорий */
  categories: ICategory[];
  /** @param onSubmit - Функция отправки формы */
  onSubmit: (data: IOnSubmit) => SubmitHandler<IOnSubmit>;
  /** @param className - Стили для внешней оболочки формы */
  className?: string;
  /** @param setIsModalOpen - Функция для изменения состояния модалки, boolean */
  setIsModalOpen?: (isHide: boolean) => void;
  /** @param isModalOpen - Открыта ли сейчас модалка, boolean */
  isModalOpen?: boolean;
  /** @param refModal - Ссылка на модалку */
  refModal?: MutableRefObject<any>;
}

export interface IUseControl {
  refModal?: MutableRefObject<any>;
  /** @param isModalOpen - Открыта ли сейчас модалка, boolean */
  isModalOpen?: boolean;
  /** @param setIsModalOpen - Функция для изменения состояния модалки, boolean */
  setIsModalOpen?: (isHide: boolean) => void;
  /** @param onSubmit - Функция срабатываемая при отправке формы */
  onSubmit: any;
}
