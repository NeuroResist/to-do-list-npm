import AddIcon from "@mui/icons-material/Add";
import Task from "../Task";
import { MOCK } from "../../constants/MOCK";
import { useRef, useState } from "react";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CottageIcon from "@mui/icons-material/Cottage";
import CategoryIcon from "@mui/icons-material/Category";
import Calendar from "react-calendar";

function CreateToDo() {
  const [tasks, setTasks] = useState<any[]>(MOCK);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<any>(null);

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
        <div className="flex justify-between border-2 border-blue rounded">
          <label className="w-full">
            <input
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              ref={inputRef}
              placeholder="Добавить задачу"
              className=" w-full h-12 pl-10 focus:outline-none"
            />
            {!focus && (
              <AddIcon
                className="absolute left-0 ml-2.5 mt-3"
                onClick={() => onClickHandle({ text: inputRef?.current?.value })}
              />
            )}
            {focus && (
              <PanoramaFishEyeIcon
                onClick={() => console.log("circle")}
                className="absolute left-0 ml-2.5 mt-3"
              />
            )}
          </label>
          <div className="flex">
            <button type="button">
              <CategoryIcon />
            </button>
            <button type="button" className="mx-2">
              <AccessAlarmIcon />
            </button>
          </div>
        </div>
        <textarea
          className="border-2 w-full"
          name="dsa"
          id="asd"
          placeholder="Описание задачи ..."
        ></textarea>
        <label htmlFor="start">Start date:</label>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        ></input>
      </form>
    </section>
  );
}

export default CreateToDo;
