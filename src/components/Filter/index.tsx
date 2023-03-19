import { useStore } from "effector-react";
import { Controller, useForm } from "react-hook-form";
import clsx from "clsx";
import Select from "react-select";
import Calendar from "react-calendar";

import { $categories } from "store";

import useControl from "./useControl";

import { STATUSES } from "../../constants";

import { ICategory, IStatuse } from "interface";

function Filter({ setFilteredTasks, refModal }: any) {
  const { onSubmit } = useControl({ setFilteredTasks });

  const categories = useStore($categories);

  const { handleSubmit, control } = useForm<any>({
    defaultValues: {
      selectCalendar: "",
      selectStatus: { label: "Все", value: "Все" },
      selectCategory: { value: "Все", label: "Все" },
    },
  });

  const optionsCategories = () => [
    { value: "Все", label: "Все" },
    ...categories.map((category: ICategory) => {
      return {
        value: category.value,
        label: category.value,
      };
    }),
  ];

  const optionsStatuses = () => [
    { value: "Все", label: "Все" },
    ...STATUSES.map((status: IStatuse) => {
      return {
        value: status.label,
        label: status.label,
      };
    }),
  ];

  return (
    <section>
      <h3>Фильтр</h3>

      <form
        ref={refModal}
        id="modal"
        className={clsx("border-2 border-black border-2 bg-background")}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="selectStatus"
          render={({ field: { onChange } }) => (
            <Select
              options={optionsStatuses()}
              onChange={onChange}
              defaultValue={{ label: "Все", value: "Все" }}
              placeholder="В работе"
            />
          )}
        />

        <Controller
          control={control}
          name="selectCategory"
          render={({ field: { onChange } }) => (
            <Select
              options={optionsCategories()}
              onChange={onChange}
              defaultValue={{ label: "Все", value: "Все" }}
              placeholder="Дом"
            />
          )}
        />

        <Controller
          control={control}
          name="selectCalendar"
          render={({ field: { onChange } }) => (
            <Calendar className="border-b-2 border-b-black" onClickDay={onChange} />
          )}
        />

        <input className="bg-green w-full cursor-pointer" type="submit" value="Применить" />
      </form>
    </section>
  );
}

export default Filter;
