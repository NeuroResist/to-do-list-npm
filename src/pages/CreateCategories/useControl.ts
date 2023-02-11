import { useState } from "react";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

import { IChangeCategory, IStateCategory } from "./interface";
import { ICategory } from "interface";
import { Value } from "./types";

function useControl() {
  const { categories, setCategories, categoriesId, setCategoriesId }: IStateCategory =
    useOutletContext();
  const [changingCategory, setChangingCategory] = useState({ state: false, id: 0 });
  const { register, handleSubmit, reset, setValue } = useForm<Value>({});

  const onSubmit = (data: { value: string }) => {
    // Исправить на сообщение об ошибке, повторяющийся элемент
    if (categories.find((category: ICategory) => category.select.value === data.value)) return null;

    if (!changingCategory.state) {
      setCategoriesId(categoriesId + 1);

      setCategories([
        ...categories,
        { id: categoriesId, select: { value: data.value, label: data.value } },
      ]);
    } else {
      setCategories((categories: ICategory[]) =>
        categories.map((category: ICategory) =>
          category.id === changingCategory.id
            ? { id: changingCategory.id, select: { value: data.value, label: data.value } }
            : category,
        ),
      );
      setChangingCategory({ state: false, id: 0 });
    }
    reset();
  };

  const changeCategory = ({ value, id }: IChangeCategory) => {
    setChangingCategory({ state: true, id: id });
    setValue("value", value);
  };

  const deleteCategory = ({ id }: { id: number }) =>
    setCategories((categories: ICategory[]) =>
      categories
        .map((category: ICategory) => (category.id === id ? undefined : category))
        .filter(Boolean),
    );

  return { categories, changeCategory, handleSubmit, register, onSubmit, deleteCategory };
}

export default useControl;
