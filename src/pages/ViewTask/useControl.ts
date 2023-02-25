import { useMemo } from "react";
import { useParams } from "react-router";
import { useNavigate, useOutletContext } from "react-router-dom";

import { ITask } from "interface";

function useControl() {
  const { tasks }: { tasks: ITask[] } = useOutletContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const currentTask = useMemo(
    () => tasks.filter((task: ITask) => task.id === Number(id))[0],
    [tasks],
  );
  return { tasks, id, navigate, currentTask };
}

export default useControl;
