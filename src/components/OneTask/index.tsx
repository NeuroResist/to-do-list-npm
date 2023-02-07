import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import clsx from "clsx";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import CreateToDo from "components/CreateToDo";
import useControlChangeTask from "pages/TasksRegistry/useControlChangeTask";

import { IOneTask } from "./interface";

function OneTask({
  add,
  description,
  Calendar,
  Select,
  registryType,
  id,
  isView,
  className,
}: IOneTask) {
  const { changeTask, handleSubmit, register, control, categories, onSubmit, isValid } =
    useControlChangeTask({ id });

  const inputRef = useRef<any>(null);
  const [isHide, setIsHide] = useState(true);

  return (
    <section
      className={clsx(
        "relative flex flex-col min-h-[100px] min-w-[250px] bg-[#FDE8EE] border-4 border-pink box-border p-2",
        className,
        { "!bg-gray": registryType === "archive" },
      )}
    >
      <p className="text-center decoration-2 underline">{add}</p>
      <p className="min-h-[100px] break-all">{description}</p>

      <div className="flex justify-between">
        <p>{Select.value}📋</p>
        <p>
          <time>{Calendar && dayjs(Calendar).format("DD.MM.YYYY 🕗")}</time>
        </p>
      </div>

      <div className="flex absolute top-1 right-1">
        {registryType !== "archive" && !isView && (
          <button
            onClick={() => {
              changeTask({ add: add, description: description });
              setIsHide(!isHide);
            }}
          >
            <BorderColorIcon />
          </button>
        )}

        {!isView && (
          <Link to={`../tasks-registry/${id}`}>
            <HelpCenterIcon />
          </Link>
        )}
      </div>

      {registryType !== "archive" && !isHide && (
        <CreateToDo
          isHide={isHide}
          setIsHide={setIsHide}
          isValid={isValid}
          handleSubmit={handleSubmit}
          register={register}
          control={control}
          categories={categories}
          onSubmit={onSubmit}
          className="absolute top-1 right-14 z-10"
          inputRef={inputRef}
        />
      )}
    </section>
  );
}

export default OneTask;
