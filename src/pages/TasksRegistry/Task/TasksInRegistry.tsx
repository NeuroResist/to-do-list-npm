import OneTask from "../../../components/OneTask";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function TasksInRegistry({ add, Select, description, id, category, changeTask }: any) {
  console.log("22222222");

  return (
    <div key={id} className="relative">
      <OneTask id={id} add={add} Select={Select} description={description} />

      {!category && (
        <button
          className="bg-green absolute top-1 right-1"
          onClick={() =>
            changeTask({
              add,
              description,
              Calendar: undefined,
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

export default TasksInRegistry;
