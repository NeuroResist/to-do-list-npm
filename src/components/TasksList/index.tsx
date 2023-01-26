import OneTask from "../OneTask";
import BorderColorIcon from "@mui/icons-material/BorderColor";

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
              <div key={id} className="relative">
                <OneTask
                  id={id}
                  add={add}
                  Calendar={Calendar}
                  Select={Select}
                  description={description}
                />

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
