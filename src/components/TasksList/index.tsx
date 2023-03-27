import OneTask from "../OneTask";

import { ITask } from "interface";
import { ITasksList } from "./interface";

function TasksList(props: ITasksList) {
  const { tasks, registryType } = props;

  return (
    <>
      {tasks.map((task: ITask) => (
        <div key={`task_${task.id}`}>
          <OneTask {...task} registryType={registryType} />
        </div>
      ))}
    </>
  );
}

export default TasksList;
