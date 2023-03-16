import { useMemo } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useStore } from "effector-react";

import { $tasks } from "store";

import { ITask } from "interface";

function useControl() {
  const tasks = useStore($tasks);
  const { id } = useParams();
  const navigate = useNavigate();

  const currentTask = useMemo(
    () => tasks.filter((task: ITask) => task.id === Number(id))[0],
    [tasks],
  );

  return { id, navigate, currentTask };
}

export default useControl;
