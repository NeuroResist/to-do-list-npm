import AddIcon from "@mui/icons-material/Add";
import Task from "../Task";
import { MOCK } from "../../constants/MOCK";
import { useRef, useState } from "react";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

function CreateToDo() {
  const [tasks, setTasks] = useState<any[]>(MOCK);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<any>(null);
  const focusRef = useRef<any>(null);

  const onClickHandle = (task: any) => {
    setTasks([...tasks, task]);
    console.log(tasks);
  };

  return (
    <section className="flex flex-col">
      <h2>Создать новую задачу</h2>

      <div className="flex flex-col items-center">
        {tasks.map(({ text }) => (
          <Task text={text} />
        ))}
      </div>

      <form className="relative w-1/2 self-center">
        <label>
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            ref={inputRef}
            placeholder="Добавить задачу"
            className="border-2 border-blue rounded w-full h-12 pl-10"
          />
          {focus && <PanoramaFishEyeIcon />}
          <AddIcon
            onClick={() => onClickHandle({ text: inputRef?.current?.value })}
            className="absolute left-0 ml-2.5 mt-3"
          />
        </label>
      </form>
    </section>
  );
}

export default CreateToDo;
