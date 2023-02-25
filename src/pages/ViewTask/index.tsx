import OneTask from "components/OneTask";

import useControl from "./useControl";

function ViewTask() {
  const { navigate, currentTask } = useControl();

  return (
    <div className="flex justify-center mt-10">
      <button
        className="absolute top-0 left-0 w-[100px] h-[60px] bg-red font-bold"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>

      <OneTask
        isArchived={currentTask.isArchived}
        isView
        add={currentTask.add}
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
