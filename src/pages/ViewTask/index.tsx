import OneTask from "components/OneTask";

import BackButton from "components/BackButton";

import useControl from "./useControl";

function ViewTask() {
  const { navigate, currentTask } = useControl();

  return (
    <div className="flex justify-center mt-10">
      <BackButton navigate={navigate} />

      <OneTask
        isDeleted={currentTask.isDeleted}
        isView
        name={currentTask.name}
        description={currentTask.description}
        calendar={currentTask.calendar}
        select={currentTask.select}
        userName={currentTask.userName}
        taskStatus={currentTask.taskStatus}
        id={currentTask.id}
        className="min-w-[400px]"
      />
    </div>
  );
}

export default ViewTask;
