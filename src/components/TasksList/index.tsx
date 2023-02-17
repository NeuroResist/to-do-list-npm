import OneTask from "../OneTask";

import { ITask } from "interface";
import { ITasksList } from "./interface";

function TasksList({ tasks, registryType }: ITasksList) {
  return (
    <>
      {tasks.map(({ add, description, Calendar, Select, id, isArchived }: ITask) => (
        <div key={id}>
          <OneTask
            isArchived={isArchived}
            id={id}
            add={add}
            Calendar={Calendar}
            Select={Select}
            description={description}
            registryType={registryType}
          />
        </div>
      ))}
    </>
  );
}

export default TasksList;
