import OneTask from "../OneTask";

import { ITask } from "interface";
import { ITasksList } from "./interface";

function TasksList({ tasks, registryType }: ITasksList) {
  return (
    <>
      {tasks.map(({ add, description, calendar, select, id, isArchived }: ITask) => (
        <div key={id}>
          <OneTask
            isArchived={isArchived}
            id={id}
            add={add}
            calendar={calendar}
            select={select}
            description={description}
            registryType={registryType}
          />
        </div>
      ))}
    </>
  );
}

export default TasksList;
