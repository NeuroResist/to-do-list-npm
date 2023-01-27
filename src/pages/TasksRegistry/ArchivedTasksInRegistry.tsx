import OneTask from "../../components/OneTask";
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
    </div>
  );
}

export default ArchivedTasksInRegistry;
