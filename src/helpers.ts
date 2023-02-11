// Фильтрация всех Тасков в объект с 3-мя категориями
export const filteredTask = (tasks: any) => {
  const filterTasks = (taskType: string) =>
    tasks.filter(({ isArchived, Calendar }: any) => {
      if (Calendar && !isArchived && taskType === "taskReminder") return true;
      if (!Calendar && !isArchived && taskType === "task") return true;
      if (isArchived && taskType === "archive") return true;
    });

  return {
    taskReminder: filterTasks("taskReminder"),
    task: filterTasks("task"),
    archive: filterTasks("archive"),
  };
};
