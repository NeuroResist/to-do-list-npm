import { SubmitHandler, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

import { IChangeTask } from "./interface";
import { IOutlet, ITask } from "interface";
import { IOnSubmit } from "./types";

function useControl({ id }: { id: number }) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isValid },
  } = useForm<IOnSubmit>({
    defaultValues: {
      add: "",
      description: "",
      calendar: undefined,
      select: { value: "Дом", label: "Дом" },
    },
  });
  const changeTask = ({ add, description }: IChangeTask) => {
    setValue("add", add);
    setValue("description", description);
  };

  const { tasks, categories, setTasks }: IOutlet = useOutletContext();

  const onSubmit: SubmitHandler<IOnSubmit> = (data) => {
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
  };

  return {
    tasks,
    changeTask,
    setTasks,
    handleSubmit,
    register,
    control,
    categories,
    onSubmit,
    isValid,
  };
}

export default useControl;
