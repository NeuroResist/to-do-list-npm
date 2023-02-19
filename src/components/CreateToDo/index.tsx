import React, { useEffect, useRef } from "react";
import Select from "react-select";
import clsx from "clsx";
import Calendar from "react-calendar";
import { Controller } from "react-hook-form";
import { ToastContainer } from "react-toastify";

import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.css";

import { checkOutsideClick, toastTasks } from "helpers";

import { ICreateToDo } from "./interface";
import { ICategory } from "interface";
import { IOnSubmit } from "pages/TasksRegistry/types";

function CreateToDo({
  handleSubmit,
  register,
  control,
  categories,
  onSubmit,
  isValid,
  className,
  setIsModalOpen,
  isModalOpen,
  refModal,
}: ICreateToDo) {
  const notify = () => toastTasks({ toastType: "changeCreate", data: isModalOpen });

  const ref = useRef<any>(null);

  const checkOutsideClickModal = (e: any) =>
    setIsModalOpen &&
    isModalOpen &&
    checkOutsideClick({ e, refModal, setIsModalOpen, isModalOpen });

  useEffect(() => {
    document.addEventListener("mousedown", checkOutsideClickModal);

    return () => {
      document.removeEventListener("mousedown", checkOutsideClickModal);
    };
  }, [isModalOpen]);

  return (
    <form
      ref={refModal}
      id="modal"
      className={clsx("border-2 border-black border-2 bg-background", className)}
      onSubmit={handleSubmit((data: IOnSubmit) => {
        onSubmit(data);
        !isModalOpen && ref?.current?.clearValue();
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
            ref={ref}
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

export default CreateToDo;
