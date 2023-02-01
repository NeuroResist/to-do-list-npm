import { useParams } from "react-router";
import { useOutletContext } from "react-router-dom";
import OneTask from "../../components/OneTask";

function ViewTask() {
  const { tasks }: any = useOutletContext();
  const { id } = useParams();

  const currentTask = tasks.filter((task: any) => task.id === Number(id))[0];

  return (
    <div>
      <OneTask
        isView
        add={currentTask.add}
        description={currentTask.description}
        Calendar={currentTask.Calendar}
        Select={currentTask.Select}
        registryType={currentTask.registryType}
        id={currentTask.id}
      />
    </div>
  );
}

export default ViewTask;
