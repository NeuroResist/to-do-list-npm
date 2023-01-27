import React from "react";
import CreateToDo from "./CreateToDo";
import useControl from "./useControl";

function CreateTasks() {
  const { handleSubmit, register, control, categories, onSubmit } = useControl();

  return (
    <section className="flex flex-col items-center">
      <h2>Создать новую задачу</h2>

      <CreateToDo
        handleSubmit={handleSubmit}
        register={register}
        control={control}
        categories={categories}
        onSubmit={onSubmit}
      />
    </section>
  );
}

export default CreateTasks;
