import TasksWithCategory from "./TasksWithCategory";
import TasksWithoutCategory from "./TasksWithoutCategory";

import useControl from "./useControl";

import { registryType } from "types";

function TasksRegistry({ registryType }: { registryType: registryType }) {
  const { categories, filterTasks } = useControl();

  return (
    <ul className="flex flex-col items-center">
      {registryType !== "withoutCategory" ? (
        <TasksWithCategory
          registryType={registryType}
          filterTasks={filterTasks}
          categories={categories}
        />
      ) : (
        <TasksWithoutCategory registryType={registryType} filterTasks={filterTasks} />
      )}
    </ul>
  );
}

export default TasksRegistry;
