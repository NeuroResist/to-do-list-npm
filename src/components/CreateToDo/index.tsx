import React, { useEffect } from "react";
import Select from "react-select";
import clsx from "clsx";
import Calendar from "react-calendar";
import { Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.css";

import { checkOutsideClick } from "helpers";

import { ICreateToDo } from "./interface";
import { ICategory } from "interface";

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
  const notify = () =>
    toast(isModalOpen !== undefined ? "Тудушка была изменена!" : "Создана новая Тудушка!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: 0,
      theme: "light",
    });

  const checkOutsideClickModal = (e: any) =>
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
      onSubmit={handleSubmit(onSubmit)}
    >
      <ToastContainer />
      <label className="w-full">
        <input
          {...register("add", {
            maxLength: 20,
            minLength: 3,
            required: "Введите название задачи",
          })}
          placeholder="Название задачи"
          className="w-full h-10 placeholder:text-red placeholder:font-semibold pl-2 border-b-2"
        />
      </label>

      <Controller
        control={control}
        name="Calendar"
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
        name="Select"
        render={({ field: { onChange } }) => (
          <Select
            options={categories.map((category: ICategory) => category.select)}
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
        placeholder="Описание задачи ..."
      />

      <input
        onClick={notify}
        disabled={!isValid}
        type="submit"
        value={isModalOpen ? "Создать" : "Изменить"}
        className={clsx("border-t-2 w-full cursor-pointer", { "bg-red": !isValid })}
      />
    </form>
  );
}

export default CreateToDo;
