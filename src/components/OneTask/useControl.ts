import { SubmitHandler, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

import { IChangeTask } from "pages/TasksRegistry/interface";
import { IOutlet, ITask } from "interface";
import { IOnSubmit } from "pages/TasksRegistry/types";

function useControl({ id }: { id: number }) {
  const { setValue } = useForm();
  const { tasks, categories, setTasks }: IOutlet = useOutletContext();

  const changeTask = ({ add, description }: IChangeTask) => {
    setValue("add", add);
    setValue("description", description);
  };

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
    changeTask,
    setTasks,
    categories,
    onSubmit,
  };
}

export default useControl;
