import { useState } from "react";
import { useUnit } from "effector-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { $categories, changeCategoryFx, createCategoryFx } from "store";
import { toastTasks } from "helpers";

import { ICategory } from "interface";

function useControl() {
  const categories = useUnit($categories);

  const [changingCategory, setChangingCategory] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isDirty },
  } = useForm<{ value: string }>({});
  const navigate = useNavigate();

  const onSubmit = (data: { value: string }) => {
    // Проверка, была ли создана Категория с уже существующим Именем
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

  // Функция для установления изменяемой в данный момент Категории
  const changeCategory = (value: string) => {
    setChangingCategory(value);
    setValue("value", value);
  };

  return {
    navigate,
    isDirty,
    setValue,
    setChangingCategory,
    categories,
    changeCategory,
    handleSubmit,
    register,
    onSubmit,
    errors,
    isChanging: Boolean(changingCategory.length),
  };
}

export default useControl;
