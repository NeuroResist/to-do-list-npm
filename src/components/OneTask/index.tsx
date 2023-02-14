import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import clsx from "clsx";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ArchiveIcon from "@mui/icons-material/Archive";

import CreateToDo from "components/CreateToDo";
import useControlChangeTask from "pages/TasksRegistry/useControlChangeTask";

import { IOneTask } from "./interface";
import { toArchive } from "../../helpers";

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
  const { changeTask, handleSubmit, setTasks, register, control, categories, onSubmit, isValid } =
    useControlChangeTask({ id });

  const refModal = useRef<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <>
            <BorderColorIcon
              className="cursor-pointer"
              onClick={() => {
                changeTask({ add: add, description: description });
                setIsModalOpen(!isModalOpen);
              }}
            />
            <ArchiveIcon
              onClick={() => toArchive({ id, setTasks })}
              className="absolute right-12 cursor-pointer"
            />
          </>
        )}

        {!isView && (
          <Link to={`../tasks-registry/${id}`}>
            <HelpCenterIcon />
          </Link>
        )}
      </div>

      {registryType !== "archive" && isModalOpen && (
        <CreateToDo
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          isValid={isValid}
          handleSubmit={handleSubmit}
          register={register}
          control={control}
          categories={categories}
          onSubmit={onSubmit}
          className="absolute top-1 right-14 z-10"
          refModal={refModal}
        />
      )}
    </section>
  );
}

export default OneTask;
