import OneTask from "../OneTask";

function TasksList({ tasks, category, changeTask }: any) {
  let isEmpty = true;

  return (
    <>
      {tasks.map(({ add, description, Calendar, Select, id }: any, i: any) => {
        if (category?.select?.value === Select?.value || !category) isEmpty = false;
        if (i + 1 === tasks.length && isEmpty) return <p>Нет тасков</p>;

        return (
          <>
            {(category?.select?.value === Select?.value || !category) && (
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

                {!category && (
                  <button
                    className="bg-green"
                    onClick={() =>
                      changeTask({
                        add,
                        description,
                        Calendar,
                        Select,
                        id,
                      })
                    }
                  >
                    Изменить
                  </button>
                )}
              </div>
            )}
          </>
        );
      })}
    </>
  );
}

export default TasksList;
