import { useOutletContext } from "react-router-dom";
import clsx from "clsx";

import TasksWithCategory from "./TasksWithCategory";

import { IOutlet } from "interface";
import { registryTypes } from "types";
import TasksWithoutCategory from "./TasksWithoutCategory";

function TasksRegistry({ registryType }: { registryType: registryTypes }) {
  const { categories, filterTasks }: IOutlet = useOutletContext();

  return (
    <ul className={clsx("flex flex-col items-center", {})}>
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
