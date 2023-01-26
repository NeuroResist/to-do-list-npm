import TasksReminderInRegistry from "../../pages/TasksRegistry/TaskReminder/TasksReminderInRegistry";
import TasksInRegistry from "../../pages/TasksRegistry/Task/TasksInRegistry";
import ArchivedTasksInRegistry from "../../pages/TasksRegistry/Archive/ArchivedTasksInRegistry";

function TasksList({ tasks, category, changeTask, registryType }: any) {
  let isEmpty = true;
  return (
    <>
      {tasks.map(({ add, description, Calendar, Select, id, isArchived }: any, i: any) => {
        const condition = category?.select?.value === Select?.value || !category;

        if (condition) isEmpty = false;
        if (i + 1 === tasks.length && isEmpty) return <p>Нет тасков</p>;
        console.log(isArchived, registryType);

        if (condition && Calendar && !isArchived && registryType === "taskReminder") {
          return (
            <TasksReminderInRegistry
              id={id}
              add={add}
              Calendar={Calendar}
              Select={Select}
              description={description}
              category={category}
              changeTask={changeTask}
            />
          );
        }

        if (condition && !Calendar && !isArchived && registryType === "task") {
          return (
            <TasksInRegistry
              id={id}
              add={add}
              Select={Select}
              description={description}
              category={category}
              changeTask={changeTask}
            />
          );
        }

        if (condition && isArchived && registryType === "archive") {
          return (
            <ArchivedTasksInRegistry
              id={id}
              add={add}
              Calendar={Calendar}
              Select={Select}
              description={description}
              category={category}
              changeTask={changeTask}
            />
          );
        }
      })}
    </>
  );
}

export default TasksList;
