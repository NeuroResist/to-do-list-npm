import { SubmitHandler } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

import { IOutlet, ITask } from "interface";
import { IOnSubmit } from "pages/TasksRegistry/types";

function useControl({ id }: { id: number }) {
  const { tasks, categories, setTasks }: IOutlet = useOutletContext();

  const onSubmit: SubmitHandler<IOnSubmit> = (data) =>
    setTasks((tasks: ITask[]) =>
      tasks.map((task: ITask) =>
        task.id === id
          ? {
              id: id,
              add: data.add,
              description: data.description,
              calendar: data.calendar,
              select: data.select,
              isArchived: task.isArchived,
            }
          : task,
      ),
    );

  return {
    tasks,
    setTasks,
    categories,
    onSubmit,
  };
}

export default useControl;
