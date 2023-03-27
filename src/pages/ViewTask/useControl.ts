import { useMemo } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useUnit } from "effector-react";

import { $tasks } from "store";

import { ITask } from "interface";

function useControl() {
  const tasks = useUnit($tasks);

  const { id } = useParams();

  const navigate = useNavigate();

  const currentTask = useMemo(
    () => tasks.filter((task: ITask) => task.id === Number(id))[0],
    [tasks],
  );

  return { id, navigate, currentTask };
}

export default useControl;
