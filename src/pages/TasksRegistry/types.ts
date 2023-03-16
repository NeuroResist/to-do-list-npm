export type IOnSubmit = {
  /** @param name - Имя Таски */
  name: string;
  /** @param description - Описание Таски */
  description: string;
  /** @param calendar - Выбранная Дата для Напоминалки */
  calendar?: Date;
  /** @param select - Выбранная Категория */
  select: { value: string; label: string };
  /** @param userName - Уникальный ник аккаунта */
  userName: string;
  /** @param taskStatus - Статус таски */
  taskStatus?: string;
  /** @param createDate - Дата создания таски */
  createDate: string;
  /** @param updateDate - Дата изменение таски */
  updateDate?: string;
};
