import OneTask from "../OneTask";

import { ITask } from "interface";
import { ITasksList } from "./interface";

function TasksList({ tasks, registryType }: ITasksList) {
  return (
    <>
      {tasks.map((task: ITask) => (
        <div key={task.id}>
          <OneTask {...task} registryType={registryType} />
        </div>
      ))}
    </>
  );
}

export default TasksList;
