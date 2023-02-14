// Фильтрация всех Тасков в объект с 3-мя категориями
import { ITask } from "./interface";

export const filteredTask = (tasks: any) => {
  const filterTasks = (taskType: string) =>
    tasks.filter(({ isArchived, Calendar }: any) => {
      if (Calendar && !isArchived && taskType === "taskReminder") return true;
      if (!Calendar && !isArchived && taskType === "task") return true;
      if (isArchived && taskType === "archive") return true;
    });

  return {
    taskReminder: filterTasks("taskReminder"),
    task: filterTasks("task"),
    archive: filterTasks("archive"),
  };
};

export const checkOutsideClick = ({ e, refModal, setIsModalOpen, isModalOpen }: any) => {
  if (refModal?.current && !refModal.current.contains(e.target))
    setIsModalOpen && setIsModalOpen(!isModalOpen);
};

export const toArchive = ({ id, setTasks }: any) =>
  setTasks((tasks: ITask[]) =>
    tasks.map((task: ITask) =>
      task.id === id
        ? {
            id: id,
            add: task.add,
            description: task.description,
            Calendar: task.Calendar,
            Select: task.Select,
            isArchived: true,
          }
        : task,
    ),
  );
