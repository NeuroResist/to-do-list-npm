import OneTask from "../OneTask";

import { ITasksList } from "../OneTask/interface";

function TasksList({ tasks, registryType }: { tasks: any; registryType: any }) {
  return (
    <>
      {tasks.map(({ add, description, Calendar, Select, id }: ITasksList) => (
        <div key={id} className="relative">
          <OneTask
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
