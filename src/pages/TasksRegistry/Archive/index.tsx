import { useOutletContext } from "react-router-dom";
import TasksList from "../../../components/TasksList";

function Archive() {
  const { tasks, categories, changeTask }: any = useOutletContext();

  return (
    <div className="flex flex-col items-center">
      {categories.map((category: any) => (
        <div className="flex flex-col items-center border-2 border-r-0 border-l-0 border-t-0 border-b-blue w-4/5 min-h-12 flex items-center py-5">
          <span className="font-bold mb-2">{category.select.value}</span>

          <div className="grid gap-1 grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 mb-20">
            <TasksList
              category={category}
              changeTask={changeTask}
              tasks={tasks}
              registryType="archive"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Archive;
