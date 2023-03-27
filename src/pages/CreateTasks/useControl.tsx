import { useMemo } from "react";
import { useUnit } from "effector-react";
import { SubmitHandler, useForm } from "react-hook-form";

import { $categories, $tasks, addTaskFx } from "store";

import { IOnSubmit } from "../TasksRegistry/types";

function useControl() {
  const { reset } = useForm();

  const [categories, tasks] = useUnit([$categories, $tasks]);

  let id = useMemo(() => tasks.length, [tasks.length]);

  const onSubmit: SubmitHandler<IOnSubmit> = (data) => {
    id++;

    addTaskFx({ id, data });

    reset();
  };

  return { tasks, categories, onSubmit };
}

export default useControl;
