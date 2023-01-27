import OneTask from "../../components/OneTask";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function TasksReminderInRegistry({
  id,
  add,
  Calendar,
  Select,
  description,
  category,
  changeTask,
}: any) {
  console.log(category);

  return (
    <div key={id} className="relative">
      <OneTask id={id} add={add} Calendar={Calendar} Select={Select} description={description} />

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
    </div>
  );
}

export default TasksReminderInRegistry;
