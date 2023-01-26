import OneTask from "../../../components/OneTask";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function ArchivedTasksInRegistry({
  add,
  Calendar,
  Select,
  description,
  id,
  category,
  changeTask,
}: any) {
  console.log("333333333");

  return (
    <div key={id} className="relative">
      <OneTask
        id={id}
        add={add}
        Calendar={Calendar}
        Select={Select}
        description={description}
        isArchived
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
  );
}

export default ArchivedTasksInRegistry;
