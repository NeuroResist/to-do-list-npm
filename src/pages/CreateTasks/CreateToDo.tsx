import { Controller } from "react-hook-form";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Select from "react-select";
import clsx from "clsx";

function CreateToDo({ handleSubmit, register, control, categories, onSubmit, className }: any) {
  return (
    <form className={clsx("border-2 border-pink", className)} onSubmit={handleSubmit(onSubmit)}>
      <label className="w-full">
        <input
          {...register("add", {
            maxLength: 20,
            minLength: 3,
            required: "Введите название задачи",
          })}
          placeholder="Название задачи"
          className="w-full"
        />
      </label>

      <Controller
        control={control}
        name="Calendar"
        render={({ field: { value, onChange } }) => (
          <Calendar minDate={new Date()} onClickDay={onChange} />
        )}
      />

      <Controller
        control={control}
        name="Select"
        render={({ field: { onChange } }) => (
          <Select
            options={categories.map((category: any) => category.select)}
            onChange={onChange}
            defaultValue={{ label: "Дом", value: "Дом" }}
            placeholder="Дом"
          />
        )}
      />

      <textarea
        {...register("description", { maxLength: 200, required: "Введите название задачи" })}
        className="border-2 w-full"
        name="description"
        placeholder="Описание задачи ..."
      />

      <input type="submit" value="Создать" className="border-2 border-b-green" />
    </form>
  );
}

export default CreateToDo;