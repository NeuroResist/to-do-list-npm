import { useRef, useState } from "react";
import { useStore } from "effector-react";
import { SubmitHandler } from "react-hook-form";

import { $categories, $tasks, changeTaskStore } from "store";

import { IOnSubmit } from "pages/TasksRegistry/types";

function useControl({ id }: { id: number }) {
  const tasks = useStore($tasks);
  const categories = useStore($categories);

  const refModal = useRef<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit: SubmitHandler<IOnSubmit> = (data) => {
    changeTaskStore({
      id,
      description: data.description,
      add: data.add,
      calendar: data.calendar,
      select: data.select,
      isToArchive: false,
    });
  };

  return {
    tasks,
    categories,
    onSubmit,
    refModal,
    isModalOpen,
    setIsModalOpen,
  };
}

export default useControl;
