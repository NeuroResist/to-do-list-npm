import CloseIcon from "@mui/icons-material/Close";

import HelpSection from "./HelpSection";

import {
  CREATE_EDIT_TASK,
  TASKS_TYPES,
  TASKS_REGISTER,
  VIEW_CARD,
  CREATE_EDIT_CATEGORY,
  FILTER,
  STATUSES,
} from "./constants";

import { IModalHelpSections } from "./interface";

function ModalHelpSections(props: IModalHelpSections) {
  const { refModal, setIsModalOpen, isModalOpen } = props;

  return (
    <div className="absolute flex left-0 items-center justify-center top-0 h-full w-full bg-gray-dark/[0.5] z-10 py-5">
      <section
        ref={refModal}
        className="flex-col relative overflow-auto flex bg-light-blue h-[800px] max-h-full w-[40%] rounded-2xl p-2"
      >
        <CloseIcon
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="absolute top-2 right-2 cursor-pointer"
        />

        <h2 className="font-bold self-center mb-3 text-3xl">Подсказки</h2>

        <HelpSection header="Виды задач" paragraphs={TASKS_TYPES} />

        <HelpSection header="Создание Тасков" paragraphs={CREATE_EDIT_TASK} />

        <HelpSection header="Создание/редактор Категорий" paragraphs={CREATE_EDIT_CATEGORY} />

        <HelpSection header="Реестр задач" paragraphs={TASKS_REGISTER} />

        <HelpSection header="Просмотр карточки" paragraphs={VIEW_CARD} />

        <HelpSection header="Фильтрация" paragraphs={FILTER} />

        <HelpSection header="Статусная модель" paragraphs={STATUSES} />
      </section>
    </div>
  );
}

export default ModalHelpSections;
