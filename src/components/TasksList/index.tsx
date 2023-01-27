import OneTask from "../OneTask";

function TasksList({ tasks, registryType }: any) {
  return (
    <>
      {tasks.map(({ add, description, Calendar, Select, id }: any) => (
        <div key={id} className="relative">
          <OneTask
            id={id}
            add={add}
            Calendar={Calendar}
            Select={Select}
            description={description}
            registryType={registryType}
          />
        </div>
      ))}
    </>
  );
}

export default TasksList;
