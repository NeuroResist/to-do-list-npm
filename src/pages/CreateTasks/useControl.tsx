import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

import { IOutlet } from "interface";
import { IOnSubmit } from "../TasksRegistry/types";

function useControl() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm<IOnSubmit>({
    defaultValues: {
      add: "",
      description: "",
      Calendar: undefined,
      Select: { value: "Дом", label: "Дом" },
    },
  });

  const { tasks, setTasks, categories }: IOutlet = useOutletContext();

  let id = useMemo(() => tasks.length, [tasks.length]);

  const onSubmit: SubmitHandler<IOnSubmit> = (data) => {
    id++;
    setTasks([
      ...tasks,
      {
        id: id,
        add: data.add,
        description: data.description,
        Calendar: data.Calendar,
        Select: data.Select,
        isArchived: false,
      },
    ]);
    reset();
  };

  return { tasks, handleSubmit, register, control, categories, onSubmit, isValid };
}

export default useControl;
