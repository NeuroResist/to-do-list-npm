import OneTask from "../../../components/OneTask";

function Tasks({ tasks, changeTask }: any) {
  return (
    <>
      {tasks.map(({ add, description, Calendar, Select, id }: any) => (
        <div
          key={id}
          className="border-2 border-r-0 border-l-0 border-t-0 border-t-0 border-b-blue w-4/5 h-12 pl-10 flex items-center"
        >
          <OneTask
            id={id}
            add={add}
            Calendar={Calendar}
            Select={Select}
            description={description}
          />

          <button
            className="bg-green"
            onClick={() => changeTask({ add, description, Calendar, Select, id })}
          >
            Изменить
          </button>
        </div>
      ))}
    </>
  );
}

export default Tasks;
