import CloseIcon from "@mui/icons-material/Close";

import HelpSection from "./HelpSection";

import { CREATE_EDIT_CATEGORY, CREATE_TASKS, TASKS_REGISTER, VIEW_CARD } from "./constants";

import { IModalHelpSections } from "./interface";

function ModalHelpSections({ refModal, setIsModalOpen, isModalOpen }: IModalHelpSections) {
  return (
    <div className="absolute flex left-0 items-center justify-center top-0 h-full w-full bg-gray-dark/[0.5] z-10">
      <section
        ref={refModal}
        className="flex-col relative flex bg-light-blue min-h-[50%] w-[40%] rounded-2xl p-2"
      >
        <CloseIcon
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="absolute top-2 right-2 cursor-pointer"
        />

        <h2 className="font-bold self-center mb-3 text-3xl">Подсказки</h2>

        <HelpSection header="Создание Тасков" paragraphs={CREATE_TASKS} />

        <HelpSection header="Создание/редактор Категорий" paragraphs={CREATE_EDIT_CATEGORY} />

        <h3 className="font-bold text-pink text-2xl mb-2">Создание/редактор Категорий</h3>

        <HelpSection header="Реестр задач" paragraphs={TASKS_REGISTER} />

        <HelpSection header="Просмотр карточки" paragraphs={VIEW_CARD} />
      </section>
    </div>
  );
}

export default ModalHelpSections;
