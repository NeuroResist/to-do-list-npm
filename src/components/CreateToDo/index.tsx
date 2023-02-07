import React, { useEffect } from "react";
import Select from "react-select";
import clsx from "clsx";
import Calendar from "react-calendar";
import { Controller, useFormContext } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.css";

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
  setIsHide,
  isHide,
  inputRef,
}: ICreateToDo) {
  const notify = () =>
    toast(isHide !== undefined ? "Тудушка была изменена!" : "Создана новая Тудушка!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: 0,
      theme: "light",
    });

  const checkOutsideClick = (e: any) => {
    if (isHide !== undefined && inputRef.current && !inputRef.current.contains(e.target))
      setIsHide && setIsHide(!isHide);
  };

  useEffect(() => {
    document.addEventListener("mousedown", checkOutsideClick);

    return () => {
      document.removeEventListener("mousedown", checkOutsideClick);
    };
  }, [isHide]);

  return (
    <form
      ref={inputRef}
      id="modal"
      className={clsx("border-2 border-black border-2 bg-[#F9F6EE]", className)}
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
          className={clsx("w-full")}
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
            options={categories.map((category: ICategory) => category.select)}
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

      <input
        onClick={notify}
        disabled={!isValid}
        type="submit"
        value={isHide ? "Создать" : "Изменить"}
        className={clsx("border-2 w-full cursor-pointer", { "bg-[#ff0000]/[0.5]": !isValid })}
      />
    </form>
  );
}

export default CreateToDo;
