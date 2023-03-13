import OneTask from "../OneTask";

import { ITask } from "interface";
import { ITasksList } from "./interface";

function TasksList({ tasks, registryType }: ITasksList) {
  return (
    <>
      {tasks.map(({ name, description, calendar, select, id, isDeleted }: ITask) => (
        <div key={id}>
          <OneTask
            isDeleted={isDeleted}
            id={id}
            name={name}
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
