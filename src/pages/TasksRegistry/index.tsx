import OneTask from "../../components/OneTask";
import useTasks from "../../hooks/useTasks";
import UseCategories from "../../hooks/useCategories";

function TasksRegistry() {
  const { tasks } = useTasks();
  const { categories } = UseCategories();

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
