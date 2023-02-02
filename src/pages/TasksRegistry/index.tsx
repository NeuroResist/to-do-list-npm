import { useOutletContext } from "react-router-dom";

import TasksList from "components/TasksList";

import { ICategory, IOutlet } from "interface";
import { IFilteredTasks } from "./interface";
import { registryTypes } from "types";

function TasksRegistry({ registryType }: { registryType: registryTypes }) {
  const { tasks, categories }: IOutlet = useOutletContext();

  return (
    <div className="flex flex-col items-center">
      {categories.map((category: ICategory) => {
        // Фильтрация только нужных Заметок/Напоминаний
        const filteredTasks = tasks.filter(({ Calendar, isArchived, Select }: IFilteredTasks) => {
          if (
            Calendar &&
            !isArchived &&
            category.select.value === Select.value &&
            registryType === "taskReminder"
          )
            return true;
          if (
            !Calendar &&
            !isArchived &&
            category.select.value === Select.value &&
            registryType === "task"
          )
            return true;
          if (isArchived && category.select.value === Select.value && registryType === "archive")
            return true;
        });

        if (!filteredTasks.length) {
          if (registryType === "archive") return <></>;
          return <p className="self-start">Для категории {category.select.value} Нет тасков</p>;
        }

        return (
          <div className="flex flex-col items-center border-2 border-r-0 border-l-0 border-t-0 border-b-blue w-4/5 min-h-12 flex items-center py-5">
            <span className="font-semibold text-3xl mb-5">{category.select.value}</span>

            <div className="grid gap-1 grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 mb-20">
              <TasksList tasks={filteredTasks} registryType={registryType} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TasksRegistry;
