import { useOutletContext } from "react-router-dom";

import TasksList from "components/TasksList";

import { filteredTask } from "helpers";

import { ICategory, IOutlet } from "interface";
import { registryTypes } from "types";

function TasksRegistry({ registryType }: { registryType: registryTypes }) {
  const { tasks, categories }: IOutlet = useOutletContext();

  return (
    <div className="flex flex-col items-center">
      {categories.map((category: ICategory) => {
        const filteredTasks1 = filteredTask(tasks)[registryType].filter(
          (task: any) => task.Select.value === category.select.value,
        );

        if (!filteredTasks1.length) {
          return (
            <p className="self-start mt-5 self-center text-3xl border-2 border-r-0 border-l-0 border-t-0 border-b-blue">
              Для категории <span className="text-pink">{category.select.value}</span> нет тасков
            </p>
          );
        }

        return (
          <div className="flex flex-col items-center border-2 border-r-0 border-l-0 border-t-0 border-b-blue w-4/5 min-h-12 flex items-center py-5">
            <span className="font-semibold text-3xl mb-5">{category.select.value}</span>

            <div className="grid gap-1 grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 mb-10">
              <TasksList tasks={filteredTasks1} registryType={registryType} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TasksRegistry;
