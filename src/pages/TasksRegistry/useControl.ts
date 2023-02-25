import { useStore } from "effector-react";
import { useOutletContext } from "react-router-dom";

import { $categories } from "store";

import { IOutlet } from "interface";

function useControl() {
  const categories = useStore($categories);
  const { filterTasks }: IOutlet = useOutletContext();

  return { categories, filterTasks };
}

export default useControl;
