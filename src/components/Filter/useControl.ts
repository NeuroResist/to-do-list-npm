import { SubmitHandler } from "react-hook-form";
import { useStore } from "effector-react";

import { $categories, $tasks } from "store";

import { filterTask } from "helpers";

function useControl({ setFilteredTasks }: any) {
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

  return { onSubmit };
}

export default useControl;
