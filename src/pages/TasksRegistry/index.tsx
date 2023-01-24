import OneTask from "../../components/OneTask";
import { useOutletContext } from "react-router-dom";

function TasksRegistry() {
  const { tasks, categories }: any = useOutletContext();

  return (
    <div>
      {categories.map((category: any) => (
        <div>
          {category.select.value}

          {tasks.map(
            ({ add, description, Calendar, Select }: any) =>
              category.select.value === Select.value && (
                <OneTask add={add} Calendar={Calendar} Select={Select} description={description} />
              ),
          )}
        </div>
      ))}
    </div>
  );
}

export default TasksRegistry;
