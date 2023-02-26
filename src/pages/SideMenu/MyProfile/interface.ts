export interface IMyProfile {
  /** @param setIsModalOpen - Функция для изменения состояния модалки, boolean */
  setIsModalOpen: (isModalOpen: boolean) => void;
  /** @param isModalOpen - Открыта ли сейчас модалка, boolean */
  isModalOpen: boolean;
  /** @param icon - Путь к иконке Профиля */
  icon: string;
  /** @param name - Имя Профиля */
  name: string;
  /** @param email - Email профиля */
  email: string;
}
