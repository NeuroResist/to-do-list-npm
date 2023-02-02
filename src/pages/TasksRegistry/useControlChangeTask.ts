import { SubmitHandler, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import { IUseControl } from "../CreateTasks/interface";
import { IChangeTask } from "./interface";
import { IOutlet, ITask } from "../../interface";

function useControlChangeTask({ id }: { id: number }) {
  const { register, handleSubmit, control, setValue } = useForm<IUseControl>({
    defaultValues: {
      add: "",
      description: "",
      Calendar: undefined,
      Select: { value: "Дом", label: "Дом" },
    },
  });

  const changeTask = ({ add, description }: IChangeTask) => {
    setValue("add", add);
    setValue("description", description);
  };

  const { tasks, categories, setTasks }: IOutlet = useOutletContext();

  const onSubmit: SubmitHandler<IUseControl> = (data) =>
    setTasks((tasks: ITask[]) =>
      tasks.map((task: ITask) =>
        task.id === id
          ? {
              id: id,
              add: data.add,
              description: data.description,
              Calendar: data.Calendar,
              Select: data.Select,
            }
          : task,
      ),
    );

  return { tasks, changeTask, handleSubmit, register, control, categories, onSubmit };
}

export default useControlChangeTask;
