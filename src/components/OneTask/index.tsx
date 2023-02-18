import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import clsx from "clsx";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ArchiveIcon from "@mui/icons-material/Archive";

import CreateToDo from "components/CreateToDo";
import useControl from "pages/TasksRegistry/useControl";

import { toArchive, toastTasks } from "helpers";

import { IOneTask } from "./interface";
import { ToastContainer } from "react-toastify";

function OneTask({
  isArchived,
  add,
  description,
  calendar,
  select,
  registryType,
  id,
  isView,
  className,
}: IOneTask) {
  const { changeTask, handleSubmit, setTasks, register, control, categories, onSubmit, isValid } =
    useControl({ id });
  console.log(select);
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
        <p>{select.value + "📋"}</p>
        <p>
          <time>{calendar && dayjs(calendar).format("DD.MM.YYYY 🕗")}</time>
        </p>
      </div>
      <div className="flex absolute top-1 right-1">
        {registryType !== "archive" && (
          <BorderColorIcon
            className="cursor-pointer"
            onClick={() => {
              changeTask({ add: add, description: description });
              setIsModalOpen(!isModalOpen);
            }}
          />
        )}

        {registryType !== "withoutCategory" && !isView && (
          <ArchiveIcon
            onClick={() => {
              toastTasks({ toastType: "archive", data: registryType });
              toArchive({ id, setTasks, isArchived });
            }}
            className={clsx("absolute cursor-pointer", {
              "right-12": registryType !== "archive",
              "right-6": registryType === "archive",
            })}
          />
        )}
        <ToastContainer />

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
