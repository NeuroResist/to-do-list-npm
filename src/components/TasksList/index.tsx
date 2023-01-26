import OneTask from "../OneTask";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function TasksList({
  tasks,
  category,
  changeTask,
  registryType,
}: {
  tasks: any;
  category?: any;
  changeTask: any;
  registryType?: registryType;
}) {
  let isEmpty = true;

  return (
    <>
      {tasks.map(({ add, description, Calendar, Select, id }: any, i: any) => {
        if (category?.select?.value === Select?.value || !category) isEmpty = false;
        if (i + 1 === tasks.length && isEmpty) return <p>Нет тасков</p>;

        return (
          <>
            {(category?.select?.value === Select?.value || !category) && (
              <div key={id} className="relative">
                {registryType === "taskReminder" || registryType === undefined ? (
                  <OneTask
                    id={id}
                    add={add}
                    Calendar={Calendar}
                    Select={Select}
                    description={description}
                  />
                ) : registryType === "task" ? (
                  <OneTask id={id} add={add} Select={Select} description={description} />
                ) : (
                  registryType === "archive" && (
                    <OneTask
                      id={id}
                      add={add}
                      Calendar={Calendar}
                      Select={Select}
                      description={description}
                      isArchived
                    />
                  )
                )}

                {!category && (
                  <button
                    className="bg-green absolute top-1 right-1"
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
                    <BorderColorIcon />
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
