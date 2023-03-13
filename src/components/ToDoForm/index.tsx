import Select from "react-select";
import clsx from "clsx";
import dayjs from "dayjs";
import Calendar from "react-calendar";
import { Controller, useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.css";

import useControl from "./useControl";

import { IToDoForm } from "./interface";
import { ICategory } from "interface";
import { IOnSubmit } from "pages/TasksRegistry/types";

// Форма для создания новой Таски / Изменения уже существующей Таски
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
    clearErrors,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<IOnSubmit>({
    defaultValues: {
      name: "",
      description: "",
      calendar: undefined,
      select: { value: "Дом", label: "Дом" },
    },
  });

  const { refClearValue, notify, userName } = useControl({
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
        onSubmit({
          ...data,
          userName: userName,
          taskStatus: data.calendar
            ? dayjs().isBefore(dayjs(data.calendar))
              ? "В работе"
              : "Просрочено"
            : undefined,
        });

        !isModalOpen && refClearValue?.current?.clearValue(); // Ресет категории при отправке формы
        clearErrors();
        reset();
      })}
    >
      <ToastContainer />

      <label className="w-full">
        <input
          {...register("name", {
            maxLength: 20,
            minLength: 3,
            required: "Введите название таски",
          })}
          placeholder="Название таски"
          className="w-full h-10 placeholder:text-red placeholder:font-semibold pl-2 border-b-2"
        />
      </label>
      {errors.name && (
        <p className="text-red font-bold">
          {errors.name.type === "required"
            ? "Введите название таски"
            : errors.name.type === "minLength"
            ? "Длина названия не менее 3 символов"
            : "Длина названия не более 20 символов"}
        </p>
      )}

      <Controller
        control={control}
        name="calendar"
        render={({ field: { onChange } }) => (
          <Calendar className="border-b-2 border-b-black" onClickDay={onChange} />
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
        {...register("description", { maxLength: 200, required: "Введите описание задачи" })}
        className="border-y-2 w-full pl-1 placeholder:text-red placeholder:font-semibold"
        name="description"
        placeholder="Описание таски ..."
      />
      {errors.description && (
        <p className="text-red font-bold">
          {errors.description.type === "required"
            ? "Введите описание таски"
            : "Длина описания не более 200 символов"}
        </p>
      )}

      <input
        onClick={notify}
        disabled={!isValid}
        type="submit"
        value={isModalOpen ? "Изменить" : "Создать"}
        className={clsx("border-t-2 w-full", {
          "bg-red": !isValid,
          "bg-green cursor-pointer": isValid,
        })}
      />
    </form>
  );
}

export default ToDoForm;
