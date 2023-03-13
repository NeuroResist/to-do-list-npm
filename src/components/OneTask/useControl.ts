import { useRef, useState } from "react";
import { useStore } from "effector-react";
import { SubmitHandler } from "react-hook-form";

import { $categories, $tasks, $user, changeTaskFx } from "store";

import { IOnSubmit } from "pages/TasksRegistry/types";

function useControl({ id }: { id: number }) {
  const tasks = useStore($tasks);
  const categories = useStore($categories);
  const user = useStore($user);
  const status = "В работе";

  const refModal = useRef<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit: SubmitHandler<IOnSubmit> = (data) =>
    changeTaskFx({
      id,
      description: data.description,
      name: data.name,
      calendar: data.calendar,
      select: data.select,
      isToDelete: false,
    });

  return {
    tasks,
    categories,
    onSubmit,
    refModal,
    isModalOpen,
    setIsModalOpen,
    user,
  };
}

export default useControl;
