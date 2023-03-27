import TasksList from "components/TasksList";
import OrangeText from "components/OrangeText";

import { ICategory, ITask } from "interface";
import { ITasksWithCategory } from "./interface";

function TasksWithCategory(props: ITasksWithCategory) {
  const { registryType, filterTasks, categories } = props;

  return (
    <>
      {categories.map((category: ICategory) => {
        // Отображения Таски имеющий тип registryType
        const filteredTasks = filterTasks[registryType].filter(
          (task: ITask) => task.select.value === category.value,
        );
        if (!filteredTasks.length) {
          return (
            <li
              key={`category_${category.value}`}
              className="self-start mt-5 self-center text-3xl border-2 border-r-0 border-l-0 border-t-0 border-b-blue"
            >
              Для категории <OrangeText>{category.value}</OrangeText> нет
              {registryType === "task"
                ? " Заметок"
                : registryType === "taskReminder"
                ? " Напоминаний"
                : " удаленных Тасков"}
            </li>
          );
        }

        return (
          <li
            key={`category_${category.value}`}
            className="flex flex-col items-center border-2 border-r-0 border-l-0 border-t-0 border-b-blue w-4/5 min-h-12 flex items-center py-5"
          >
            <OrangeText className="text-3xl mb-5">{category.value}</OrangeText>

            <div className="grid gap-1 grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 mb-10">
              <TasksList tasks={filteredTasks} registryType={registryType} />
            </div>
          </li>
        );
      })}
    </>
  );
}

export default TasksWithCategory;
