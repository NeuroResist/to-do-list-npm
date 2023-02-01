import { useForm } from "react-hook-form";
import { useState } from "react";
import { IValue } from "./interface";
import { useOutletContext } from "react-router-dom";
import { useGetNextId } from "../../helpers";

type Value = { value: string };

function useControl() {
  const { categories, setCategories }: any = useOutletContext();
  const { categoriesId, setCategoriesId }: any = useGetNextId({ newId: categories.length });

  const { register, handleSubmit, reset, setValue } = useForm<Value>({});
  const [changingCategory, setChangingCategory] = useState({ state: false, id: 0 });

  const onSubmit = (data: IValue) => {
    // Исправить на сообщение об ошибке, повторяющийся элемент
    if (categories.find((category: any) => category.select.value === data.value)) return null;

    if (!changingCategory.state) {
      setCategoriesId(categoriesId + 1);

      setCategories([
        ...categories,
        { id: categoriesId, select: { value: data.value, label: data.value } },
      ]);
    } else {
      setCategories((categories: any) =>
        categories.map((category: any) =>
          category.id === changingCategory.id
            ? { id: changingCategory.id, select: { value: data.value, label: data.value } }
            : category,
        ),
      );

      setChangingCategory({ state: false, id: 0 });
    }
    reset();
  };

  const changeCategory = ({ value, id }: any) => {
    setChangingCategory({ state: true, id: id });
    setValue("value", value);
  };

  const deleteCategory = ({ id }: any) => {
    setCategories((categories: any) =>
      categories
        .map((category: any) => (category.id === id ? undefined : category))
        .filter(Boolean),
    );
  };

  return { categories, changeCategory, handleSubmit, register, onSubmit, deleteCategory };
}

export default useControl;
