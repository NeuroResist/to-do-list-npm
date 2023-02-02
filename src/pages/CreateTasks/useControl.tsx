import { SubmitHandler, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

import { IUseControl } from "./interface";
import { IOutlet } from "interface";

function useControl() {
  const { register, handleSubmit, control, reset } = useForm<IUseControl>({
    defaultValues: {
      add: "",
      description: "",
      Calendar: undefined,
      Select: { value: "Дом", label: "Дом" },
    },
  });

  const { tasks, setTasks, categories }: IOutlet = useOutletContext();

  let id = tasks.length;

  const onSubmit: SubmitHandler<IUseControl> = (data) => {
    id++;
    setTasks([
      ...tasks,
      {
        id: id,
        add: data.add,
        description: data.description,
        Calendar: data.Calendar,
        Select: data.Select,
      },
    ]);
    reset();
  };

  return { tasks, handleSubmit, register, control, categories, onSubmit };
}

export default useControl;
