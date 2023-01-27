import OneTask from "../OneTask";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import useControlChangeTask from "../../pages/CreateTasks/useControlChangeTask";
import CreateToDo from "../../pages/CreateTasks/CreateToDo";
import { useState } from "react";

function TasksList({ tasks, registryType }: any) {
  const [isHide, setIsHide] = useState(true);

  const { changeTask, handleSubmit, register, control, categories, onSubmit } =
    useControlChangeTask();

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
            isArchived={registryType === "archive"}
          />

          {registryType !== "archive" && (
            <button
              className="bg-green absolute top-1 right-1"
              onClick={() => {
                setIsHide(!isHide);
                changeTask({
                  add,
                  description,
                  Calendar,
                  Select,
                  id,
                });
              }}
            >
              <BorderColorIcon />
            </button>
          )}
          {registryType !== "archive" && !isHide && (
            <CreateToDo className="absolute top-1 right-1" />
          )}
        </div>
      ))}
    </>
  );
}

export default TasksList;
