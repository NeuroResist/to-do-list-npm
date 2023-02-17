import { useState } from "react";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

import { toastTasks } from "helpers";

import { IStateCategory } from "./interface";
import { ICategory } from "interface";
import { Value } from "./types";

function useControl() {
  const { categories, setCategories }: IStateCategory = useOutletContext();
  const [changingCategory, setChangingCategory] = useState({ state: false, value: "" });
  const { register, handleSubmit, reset, setValue } = useForm<Value>({});

  const onSubmit = (data: { value: string }) => {
    // Исправить на сообщение об ошибке, повторяющийся элемент
    if (categories.find((category: ICategory) => category.value === data.value)) return null;

    if (!changingCategory.state) {
      toastTasks({ toastType: "category", data: "create" });

      setCategories([...categories, { value: data.value, label: data.value }]);
    } else {
      toastTasks({ toastType: "category", data: "change" });
      setCategories((categories: ICategory[]) =>
        categories.map((category: ICategory) =>
          category.value === changingCategory.value
            ? { value: data.value, label: data.value }
            : category,
        ),
      );
      setChangingCategory({ state: false, value: data.value });
    }
    reset();
  };

  const changeCategory = ({ value }: { value: string }) => {
    setChangingCategory({ state: true, value: value });
    setValue("value", value);
  };

  const deleteCategory = ({ value }: { value: string }) =>
    setCategories((categories: ICategory[]) =>
      categories
        .map((category: ICategory) => (category.value === value ? undefined : category))
        .filter(Boolean),
    );

  return { categories, changeCategory, handleSubmit, register, onSubmit, deleteCategory };
}

export default useControl;
