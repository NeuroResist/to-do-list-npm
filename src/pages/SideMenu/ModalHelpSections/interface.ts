import { MutableRefObject, ReactElement } from "react";

export interface IHelpSection {
  /** @param header - Текст параграфа */
  header: string;
  /** @param paragraphs - Массив Параграфов с текстом */
  paragraphs: ReactElement[];
  /** @param styles - Стили для Заголовка и Текста внутри */
  styles?: { header: string; paragraph: string };
}

export interface IModalHelpSections {
  /** @param refModal - Ссылка на модалку */
  refModal?: MutableRefObject<any>;
  /** @param setIsModalOpen - Функция для изменения состояния модалки, boolean */
  setIsModalOpen: (isModalOpen: boolean) => void;
  /** @param isModalOpen - Открыта ли сейчас модалка, boolean */
  isModalOpen: boolean;
}
