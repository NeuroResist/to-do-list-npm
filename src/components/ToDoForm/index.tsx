import React from "react";
import Select from "react-select";
import clsx from "clsx";
import Calendar from "react-calendar";
import { Controller, useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.css";

import useControl from "./useControl";

import { IToDoForm } from "./interface";
import { ICategory } from "interface";
import { IOnSubmit } from "pages/TasksRegistry/types";

function ToDoForm({
  categories,
  onSubmit,
  className,
  setIsModalOpen,
  isModalOpen,
  refModal,
}: IToDoForm) {
  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<IOnSubmit>({
    defaultValues: {
      add: "",
      description: "",
      calendar: undefined,
      select: { value: "Дом", label: "Дом" },
    },
  });

  const { refClearValue, notify } = useControl({
    isModalOpen,
    setIsModalOpen,
    refModal,
  });

  return (
    <form
      ref={refModal}
      id="modal"
      className={clsx("border-2 border-black border-2 bg-background", className)}
      onSubmit={handleSubmit((data: IOnSubmit) => {
        onSubmit(data);
        !isModalOpen && refClearValue?.current?.clearValue(); // Ресет категории при отправке формы
        reset();
      })}
    >
      <ToastContainer />

      <label className="w-full">
        <input
          {...register("add", {
            maxLength: 20,
            minLength: 3,
            required: "Введите название таски",
          })}
          placeholder="Название таски"
          className="w-full h-10 placeholder:text-red placeholder:font-semibold pl-2 border-b-2"
        />
      </label>

      <Controller
        control={control}
        name="calendar"
        render={({ field: { onChange } }) => (
          <Calendar
            className="border-b-2 border-b-black"
            minDate={new Date()}
            onClickDay={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="select"
        render={({ field: { onChange } }) => (
          <Select
            ref={refClearValue}
            options={categories.map((category: ICategory) => {
              return {
                value: category.value,
                label: category.value,
              };
            })}
            onChange={onChange}
            defaultValue={{ label: "Дом", value: "Дом" }}
            placeholder="Дом"
          />
        )}
      />

      <textarea
        {...register("description", { maxLength: 200, required: "Введите название задачи" })}
        className="border-y-2 w-full pl-1 placeholder:text-red placeholder:font-semibold"
        name="description"
        placeholder="Описание таски ..."
      />

      <input
        onClick={notify}
        disabled={!isValid}
        type="submit"
        value={isModalOpen ? "Изменить" : "Создать"}
        className={clsx("border-t-2 w-full cursor-pointer", {
          "bg-red": !isValid,
          "bg-green": isValid,
        })}
      />
    </form>
  );
}

export default ToDoForm;
