import { useOutletContext } from "react-router-dom";

import TasksList from "components/TasksList";

import { ICategory, IOutlet } from "interface";
import { registryTypes } from "types";

function TasksRegistry({ registryType }: { registryType: registryTypes }) {
  const { categories, filterTasks }: IOutlet = useOutletContext();

  return (
    <ul className="flex flex-col items-center">
      {categories.map((category: ICategory) => {
        const filteredTasks =
          registryType !== "withoutCategory"
            ? filterTasks[registryType].filter(
                (task: any) => task.Select.value === category.select.value,
              )
            : filterTasks["withoutCategory"];
        console.log(filteredTasks);

        if (!filteredTasks.length) {
          return (
            <li className="self-start mt-5 self-center text-3xl border-2 border-r-0 border-l-0 border-t-0 border-b-blue">
              Для категории <span className="text-pink">{category.select.value}</span> нет
              {registryType === "task"
                ? " Заметок"
                : registryType === "taskReminder"
                ? " Напоминаний"
                : " Тасков"}
            </li>
          );
        }

        return (
          <li className="flex flex-col items-center border-2 border-r-0 border-l-0 border-t-0 border-b-blue w-4/5 min-h-12 flex items-center py-5">
            <span className="font-semibold text-3xl mb-5">{category.select.value}</span>

            <div className="grid gap-1 grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 mb-10">
              <TasksList tasks={filteredTasks} registryType={registryType} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TasksRegistry;
