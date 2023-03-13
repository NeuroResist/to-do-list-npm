import OneTask from "../OneTask";

import { ITask } from "interface";
import { ITasksList } from "./interface";

function TasksList({ tasks, registryType }: ITasksList) {
  return (
    <>
      {tasks.map(
        ({ name, description, calendar, select, id, isDeleted, taskStatus, userName }: ITask) => (
          <div key={id}>
            <OneTask
              isDeleted={isDeleted}
              id={id}
              name={name}
              calendar={calendar}
              select={select}
              userName={userName}
              taskStatus={taskStatus}
              description={description}
              registryType={registryType}
            />
          </div>
        ),
      )}
    </>
  );
}

export default TasksList;
