import { Controller } from "react-hook-form";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Select from "react-select";
import clsx from "clsx";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateToDo({ handleSubmit, register, control, categories, onSubmit, className }: any) {
  const notify = () => toast("Создана новая Тудушка!");

  return (
    <form className={clsx("border-2 border-black", className)} onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
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

      <input onClick={notify} type="submit" value="Создать" className="border-2" />
    </form>
  );
}

export default CreateToDo;
