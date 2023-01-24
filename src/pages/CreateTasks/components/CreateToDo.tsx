import { Controller } from "react-hook-form";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Select from "react-select";
import useControl from "../useControl";
import TasksRegistry from "../../../components/TasksList";

function CreateToDo() {
  const { tasks, changeTask, handleSubmit, register, control, categories, onSubmit } = useControl();

  return (
    <div className="w-4/5">
      <div className="flex flex-col items-center mb-20">
        <TasksRegistry tasks={tasks} changeTask={changeTask} isChanging />
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
          render={({ field: { onChange } }) => (
            <Select
              options={categories.map((category: any) => category.select)}
              onChange={onChange}
            />
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
