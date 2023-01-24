import { useState } from "react";
import { TASKS } from "../MOCK";

function useTasks() {
  const [tasks, setTasks] = useState(TASKS);

  return { tasks, setTasks };
}

export default useTasks;
