import { useRef, useState } from "react";
import { useStore } from "effector-react";
import { SubmitHandler } from "react-hook-form";

import { $categories, $tasks, $user, changeTaskFx } from "store";

import { STATUSES } from "../../constants";

import { IOnSubmit } from "pages/TasksRegistry/types";

function useControl({ id, taskStatus }: { id: number; taskStatus?: string }) {
  const tasks = useStore($tasks);
  const categories = useStore($categories);
  const userName = useStore($user);

  const refModal = useRef<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit: SubmitHandler<IOnSubmit> = (data) =>
    changeTaskFx({
      id,
      description: data.description,
      name: data.name,
      calendar: data.calendar,
      select: data.select,
      userName: data.userName,
      taskStatus: data.taskStatus,
      isToDelete: false,
    });

  const statusColor = STATUSES.find((item: any) => item.label === taskStatus)?.color;

  return {
    statusColor,
    tasks,
    categories,
    onSubmit,
    refModal,
    isModalOpen,
    setIsModalOpen,
    userName,
  };
}

export default useControl;
