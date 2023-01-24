import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Select from "react-select";
import OneTask from "../../components/OneTask";
import useTasks from "../../hooks/useTasks";
import UseCategories from "../../hooks/useCategories";
import { useState } from "react";

function CreateToDo() {
  const { register, handleSubmit, control, setValue, reset } = useForm<Inputs>({
    defaultValues: {
      add: "",
      description: "",
      Calendar: new Date(),
      Select: { value: "Дом", label: "Дом" },
    },
  });

  const { tasks, setTasks } = useTasks();
  const { categories } = UseCategories();

  let id = tasks.length;

  const [changingTask, setChangingTask] = useState({ state: false, id: 0 });

  const changeTask = ({ add, description, id }: any) => {
    setChangingTask({ state: true, id: id });
    setValue("add", add);
    setValue("description", description);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!changingTask.state) {
      id++;
      setTasks([
        ...tasks,
        {
          id: id,
          add: data.add,
          description: data.description,
          Calendar: data.Calendar,
          Select: data.Select,
        },
      ]);
    } else {
      tasks.map((task: any) => {
        if (task.id === changingTask.id) {
          task.id = changingTask.id;
          task.add = data.add;
          task.description = data.description;
          task.Calendar = data.Calendar;
          task.Select = data.Select;
        }
      });
      reset();
      setChangingTask({ state: false, id: 0 });
    }
  };

  return (
    <div className="w-4/5">
      <div className="flex flex-col items-center mb-20">
        {tasks.map(({ add, description, Calendar, Select, id }: any) => (
          <div className="border-2 border-r-0 border-l-0 border-t-0 border-t-0 border-b-blue w-4/5 h-12 pl-10 flex items-center">
            <OneTask
              id={id}
              add={add}
              Calendar={Calendar}
              Select={Select}
              description={description}
            />

            <button
              className="bg-green"
              onClick={() => changeTask({ add, description, Calendar, Select, id })}
            >
              Изменить
            </button>
          </div>
        ))}
      </div>

      <form className="border-2 border-pink" onSubmit={handleSubmit(onSubmit)}>
        <label className="w-full">
          <input {...register("add")} placeholder="Название задачи" className="w-full" />
        </label>

        <Controller
          control={control}
          name="Calendar"
          defaultValue={new Date()}
          render={({ field: { value, onChange } }) => (
            <Calendar minDate={value} value={value} onClickDay={onChange} />
          )}
        />

        <Controller
          control={control}
          name="Select"
          defaultValue={new Date()}
          render={({ field: { value, onChange } }) => (
            <Select options={categories.map((category) => category.select)} onChange={onChange} />
          )}
        />

        <textarea
          {...register("description")}
          className="border-2 w-full"
          name="description"
          placeholder="Описание задачи ..."
        />
        <input type="submit" className="border-2 border-b-green" />
      </form>
    </div>
  );
}

export default CreateToDo;
