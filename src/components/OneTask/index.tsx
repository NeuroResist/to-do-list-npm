import dayjs from "dayjs";
import clsx from "clsx";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CreateToDo from "../../pages/CreateTasks/CreateToDo";
import { useState } from "react";
import useControlChangeTask from "../../pages/TasksRegistry/useControlChangeTask";

function OneTask({ add, description, Calendar, Select, registryType, id }: any) {
  const [isHide, setIsHide] = useState(true);

  const { changeTask, handleSubmit, register, control, categories, onSubmit } =
    useControlChangeTask({ id });

  return (
    <section
      className={clsx(
        "flex flex-col min-h-[100px] min-w-[250px] bg-green border-4 border-pink box-border p-2",
        { "!bg-gray": registryType === "archive" },
      )}
    >
      <p className="text-center">{add}✏️</p>
      <p className="min-h-[100px] break-all">{description}🌟</p>
      <div className="flex justify-between">
        <p>{Select.value}📋</p>
        <p>
          <time>{Calendar && dayjs(Calendar).format("DD.MM.YYYY 🕗")}</time>
        </p>
      </div>

      {registryType !== "archive" && (
        <button
          className="bg-green absolute top-1 right-1"
          onClick={() => {
            changeTask({ add: add, description: description });
            setIsHide(!isHide);
          }}
        >
          <BorderColorIcon />
        </button>
      )}

      {registryType !== "archive" && !isHide && (
        <CreateToDo
          handleSubmit={handleSubmit}
          register={register}
          control={control}
          categories={categories}
          onSubmit={onSubmit}
          className="absolute top-1 right-7 z-10"
        />
      )}
    </section>
  );
}

export default OneTask;
