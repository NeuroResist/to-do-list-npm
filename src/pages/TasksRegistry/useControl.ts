import { useStore } from "effector-react";
import { useNavigate, useOutletContext } from "react-router-dom";

import { $categories } from "store";

import { IOutlet } from "interface";

function useControl() {
  const categories = useStore($categories);
  const { filterTasks }: IOutlet = useOutletContext();
  const navigate = useNavigate();

  return { categories, filterTasks, navigate };
}

export default useControl;
