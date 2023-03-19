import { Controller } from "react-hook-form";
import clsx from "clsx";
import Select from "react-select";
import Calendar from "react-calendar";

import useControl from "./useControl";

import { IFilter } from "./interface";

function Filter(props: IFilter) {
  const { setFilteredTasks, refModal } = props;

  const { onSubmit, handleSubmit, control, optionsCategories, optionsStatuses } = useControl({
    setFilteredTasks,
  });

  return (
    <section className="absolute top-[70px] left-5 z-10">
      <h3 className="text-center bg-orange">Фильтр</h3>

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
