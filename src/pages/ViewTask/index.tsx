import OneTask from "components/OneTask";

import BackButton from "components/BackButton";

import useControl from "./useControl";

function ViewTask() {
  const { navigate, currentTask } = useControl();

  return (
    <div className="flex justify-center mt-10">
      <BackButton navigate={navigate} />

      <OneTask
        isArchived={currentTask.isArchived}
        isView
        name={currentTask.name}
        description={currentTask.description}
        calendar={currentTask.calendar}
        select={currentTask.select}
        id={currentTask.id}
        className="min-w-[400px]"
      />
    </div>
  );
}

export default ViewTask;
