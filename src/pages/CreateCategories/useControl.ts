import { useForm } from "react-hook-form";
import { useState } from "react";
import { IValue } from "./interface";
import { useOutletContext } from "react-router-dom";

type Value = { value: string };

function useControl() {
  const { categories, setCategories }: any = useOutletContext();

  const { register, handleSubmit, reset, setValue } = useForm<Value>({});
  const [changingCategory, setChangingCategory] = useState({ state: false, id: 0 });

  let id = categories.length; // Вынести в helpers getNextId функцию

  const onSubmit = (data: IValue) => {
    if (!changingCategory.state) {
      id++;
      // getNextId
      setCategories([...categories, { id: id, select: { value: data.value, label: data.value } }]);
    } else {
      // TODO сделать как в тасках
      categories.map((category: any) => {
        if (category.id === changingCategory.id) {
          category.id = changingCategory.id;
          category.select = { value: data.value, label: data.value };
        }
      });

      reset();
      setChangingCategory({ state: false, id: 0 });
    }
  };

  const changeCategory = ({ value, id }: any) => {
    setChangingCategory({ state: true, id: id });
    setValue("value", value);
  };

  return { categories, changeCategory, handleSubmit, register, onSubmit };
}

export default useControl;
