import { useState } from "react";
import { useStore } from "effector-react";
import { useForm } from "react-hook-form";

import { $categories, changeCategoryFx, createCategoryFx } from "store";
import { toastTasks } from "helpers";

import { ICategory } from "interface";

function useControl() {
  const categories = useStore($categories);
  const [changingCategory, setChangingCategory] = useState("");
  const { register, handleSubmit, reset, setValue } = useForm<{ value: string }>({});

  const onSubmit = (data: { value: string }) => {
    if (categories.find((category: ICategory) => category.value === data.value)) return null;

    if (!changingCategory.length) {
      createCategoryFx(data.value);
    } else {
      changeCategoryFx({ changingCategory, value: data.value });

      setChangingCategory("");
    }

    toastTasks({
      toastType: "category",
      data: changingCategory.length ? "create" : "change",
    });

    reset();
  };

  const changeCategory = (value: string) => {
    setChangingCategory(value);
    setValue("value", value);
  };

  return { categories, changeCategory, handleSubmit, register, onSubmit };
}

export default useControl;
