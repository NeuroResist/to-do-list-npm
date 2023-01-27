import BorderColorIcon from "@mui/icons-material/BorderColor";
import OneTask from "../../components/OneTask";

function RegistryTasks({
  id,
  add,
  Calendar,
  Select,
  description,
  changeTask,
  registryType,
}: any) {
  return (
    <div key={id} className="relative">
      <OneTask
        id={id}
        add={add}
        Calendar={Calendar}
        Select={Select}
        description={description}
        isArchived={}
      />

      {registryType !== "archive" && (
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
  );
}

export default RegistryTasks;
