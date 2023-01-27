import React from "react";
import CreateToDo from "./CreateToDo";

function CreateTasks() {
  return (
    <section className="flex flex-col items-center">
      <h2>Создать новую задачу</h2>

      <CreateToDo />
    </section>
  );
}

export default CreateTasks;
