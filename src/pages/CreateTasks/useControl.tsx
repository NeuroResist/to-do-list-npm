import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

import { IOutlet } from "interface";
import { IOnSubmit } from "../TasksRegistry/types";

function useControl() {
  const { reset } = useForm();

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
        calendar: data.calendar,
        select: data.select,
        isArchived: false,
      },
    ]);
    reset();
  };

  return { tasks, categories, onSubmit };
}

export default useControl;
