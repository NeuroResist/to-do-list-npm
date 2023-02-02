import { useParams } from "react-router";
import { useOutletContext } from "react-router-dom";

import OneTask from "components/OneTask";

import { ITask } from "interface";

function ViewTask() {
  const { tasks }: { tasks: ITask[] } = useOutletContext();
  const { id } = useParams();

  const currentTask = tasks.filter((task: ITask) => task.id === Number(id))[0];

  return (
    <div className="flex justify-center mt-10">
      <OneTask
        isView
        add={currentTask.add}
        description={currentTask.description}
        Calendar={currentTask.Calendar}
        Select={currentTask.Select}
        registryType={currentTask.registryType}
        id={currentTask.id}
        className="min-w-[400px]"
      />
    </div>
  );
}

export default ViewTask;