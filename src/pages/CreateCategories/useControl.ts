import { useState } from "react";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

import { toastTasks } from "helpers";

import { IStateCategory } from "./interface";
import { ICategory } from "interface";

function useControl() {
  const { categories, setCategories }: IStateCategory = useOutletContext();
  const [changingCategory, setChangingCategory] = useState({ value: "" });
  const { register, handleSubmit, reset, setValue } = useForm<{ value: string }>({});

  const onSubmit = (data: { value: string }) => {
    if (categories.find((category: ICategory) => category.value === data.value)) return null;

    if (!changingCategory.value.length) {
      setCategories([...categories, { value: data.value, label: data.value }]);
    } else {
      setCategories((categories: ICategory[]) =>
        categories.map((category: ICategory) =>
          category.value === changingCategory.value
            ? { value: data.value, label: data.value }
            : category,
        ),
      );
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

  const deleteCategory = ({ value }: { value: string }) =>
    setCategories((categories: ICategory[]) =>
      categories
        .map((category: ICategory) => (category.value === value ? undefined : category))
        .filter(Boolean),
    );

  return { categories, changeCategory, handleSubmit, register, onSubmit, deleteCategory };
}

export default useControl;
