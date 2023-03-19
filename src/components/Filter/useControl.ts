import { SubmitHandler, useForm } from "react-hook-form";
import { useStore } from "effector-react";

import { $categories, $tasks } from "store";

import { filterTask } from "helpers";

import { STATUSES } from "../../constants";

import { ICategory, IStatuse } from "interface";

function useControl({ setFilteredTasks }: { setFilteredTasks: (data: any) => void }) {
  const tasks = useStore($tasks);
  const categories = useStore($categories);

  const onSubmit: SubmitHandler<any> = (data) => {
    const filter = {
      filterCalendar: data.selectCalendar,
      filterCategory: data.selectCategory,
      filterStatus: data.selectStatus,
    };

    const filteredTasks = filterTask({ tasks, categories, filter });

    setFilteredTasks(filteredTasks);
  };

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

  return { onSubmit, handleSubmit, control, optionsCategories, optionsStatuses };
}

export default useControl;
