import TasksList from "components/TasksList";
import OrangeText from "components/OrangeText";

import { ITasksWithoutCategory } from "./interface";

function TasksWithoutCategory({ filterTasks, registryType }: ITasksWithoutCategory) {
  return filterTasks["withoutCategory"].length > 0 ? (
    <>
      <h2 className="self-start mb-5 mt-5 self-center text-3xl border-2 border-r-0 border-l-0 border-t-0 border-b-blue">
        Категории для этих <OrangeText>Тасков</OrangeText> были удалены
      </h2>

      <div className="grid gap-1 grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 mb-10">
        <TasksList tasks={filterTasks["withoutCategory"]} registryType={registryType} />
      </div>
    </>
  ) : (
    <div className="self-start mt-5 self-center text-3xl border-2 border-r-0 border-l-0 border-t-0 border-b-blue">
      Все Таски рассортированы по категориям ✅
    </div>
  );
}

export default TasksWithoutCategory;
