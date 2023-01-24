import { useOutletContext } from "react-router-dom";
import TasksList from "../../components/TasksList";

function TasksRegistry() {
  const { tasks, categories, changeTask }: any = useOutletContext();

  return (
    <div>
      {categories.map((category: any) => (
        <div>
          {category.select.value}
          <TasksList category={category} changeTask={changeTask} tasks={tasks} />
        </div>
      ))}
    </div>
  );
}

export default TasksRegistry;
