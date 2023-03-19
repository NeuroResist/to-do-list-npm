import OneTask from "components/OneTask";

import BackButton from "components/BackButton";

import useControl from "./useControl";

function ViewTask() {
  const { navigate, currentTask } = useControl();

  return (
    <div className="flex justify-center mt-10">
      <BackButton navigate={navigate} />

      <div className="absolute left-[100px] top-0 bg-blue">
        <p>
          <time>Дата создания: {currentTask.createDate}</time>
        </p>
        <p>
          <time>Дата изменения: {currentTask.updateDate ?? "Не изменялась"}</time>
        </p>
      </div>

      <OneTask {...currentTask} isView className="min-w-[400px]" />
    </div>
  );
}

export default ViewTask;
