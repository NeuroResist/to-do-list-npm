import { useMemo } from "react";
import { useStore } from "effector-react";
import { SubmitHandler, useForm } from "react-hook-form";

import { $categories, $tasks, addTaskStore } from "store";

import { IOnSubmit } from "../TasksRegistry/types";

function useControl() {
  const { reset } = useForm();
  const tasks = useStore($tasks);
  const categories = useStore($categories);

  let id = useMemo(() => tasks.length, [tasks.length]);

  const onSubmit: SubmitHandler<IOnSubmit> = (data) => {
    id++;

    addTaskStore({ id, data });

    reset();
  };

  return { tasks, categories, onSubmit };
}

export default useControl;
