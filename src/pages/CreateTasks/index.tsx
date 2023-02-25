import ToDoForm from "components/ToDoForm";

import useControl from "./useControl";

function CreateTasks() {
  const { categories, onSubmit } = useControl();

  return (
    <section className="flex flex-col items-center mt-10">
      <h2 className="font-semibold text-3xl mb-5">Создать новую задачу</h2>

      <ToDoForm categories={categories} onSubmit={onSubmit} />
    </section>
  );
}

export default CreateTasks;
