import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { ToastContainer } from "react-toastify";
import clsx from "clsx";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ArchiveIcon from "@mui/icons-material/Archive";

import ToDoForm from "components/ToDoForm";
import useControl from "components/OneTask/useControl";

import { changeTaskFx } from "store";

import { STATUSES } from "../../constants";

import { toastTasks } from "helpers";

import { IOneTask } from "./interface";

// Компонент с 1 карточкой и информацией в ней
function OneTask({
  isDeleted,
  name,
  description,
  calendar,
  select,
  registryType,
  id,
  taskStatus,
  isView,
  className,
}: IOneTask) {
  const { categories, onSubmit, refModal, isModalOpen, setIsModalOpen, userName } = useControl({
    id,
  });

  const statusColor = STATUSES.find((item: any) => item.label === taskStatus)?.color;

  return (
    <section
      className={clsx(
        "relative flex flex-col min-h-[100px] min-w-[250px] bg-[#FDE8EE] border-4 border-pink box-border p-2",
        className,
        { "!bg-gray": registryType === "delete" },
      )}
    >
      <p className="text-center decoration-2 underline">{name}</p>
      <p className="min-h-[100px] break-all">{description}</p>
      <div className="flex justify-between">
        <p>{select.value + "📋"}</p>
        <p>
          <time>{calendar && dayjs(calendar).format("DD.MM.YYYY 🕗")}</time>
        </p>
      </div>
      <div className="flex justify-between">
        <p>{userName}</p>
        {taskStatus && <p className={`px-2 rounded ${statusColor}`}>{taskStatus}</p>}
      </div>

      <div className="flex absolute top-1 right-1">
        {registryType !== "delete" && !isDeleted && (
          <BorderColorIcon
            className="cursor-pointer"
            onClick={() => setIsModalOpen(!isModalOpen)}
          />
        )}

        {registryType !== "withoutCategory" && (
          <ArchiveIcon
            onClick={() => {
              toastTasks({ toastType: "delete", data: registryType });
              changeTaskFx({ id, isDeleted, isToDelete: true });
            }}
            className={clsx("absolute cursor-pointer", {
              "right-12": registryType !== "delete",
              "right-6": registryType === "delete",
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

      {registryType !== "delete" && isModalOpen && (
        <ToDoForm
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
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
