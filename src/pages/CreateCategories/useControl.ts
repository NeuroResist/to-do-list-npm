import { useState } from "react";
import { useStore } from "effector-react";
import { useForm } from "react-hook-form";

import { $categories, changeCategoryStore, createCategoryStore } from "store";
import { toastTasks } from "helpers";

import { ICategory } from "interface";

function useControl() {
  const categories = useStore($categories);
  const [changingCategory, setChangingCategory] = useState({ value: "" });
  const { register, handleSubmit, reset, setValue } = useForm<{ value: string }>({});

  const onSubmit = (data: { value: string }) => {
    if (categories.find((category: ICategory) => category.value === data.value)) return null;

    if (!changingCategory.value.length) {
      createCategoryStore(data.value);
    } else {
      changeCategoryStore({ changingCategory, value: data.value });

      setChangingCategory({ value: data.value });
    }

    toastTasks({
      toastType: "category",
      data: changingCategory.value.length ? "create" : "change",
    });

    reset();
  };

  const changeCategory = ({ value }: { value: string }) => {
    setChangingCategory({ value: value });
    setValue("value", value);
  };

  return { categories, changeCategory, handleSubmit, register, onSubmit };
}

export default useControl;
