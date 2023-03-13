import TasksWithCategory from "./TasksWithCategory";
import TasksWithoutCategory from "./TasksWithoutCategory";
import BackButton from "components/BackButton";

import useControl from "./useControl";

import { registryType } from "types";

function TasksRegistry({ registryType }: { registryType: registryType }) {
  const { categories, filterTasks, navigate } = useControl();

  return (
    <ul className="flex flex-col items-center">
      <BackButton navigate={navigate} />

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
