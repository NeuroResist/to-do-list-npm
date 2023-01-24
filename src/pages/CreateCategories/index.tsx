import useCategories from "../../hooks/useCategories";
import { useForm } from "react-hook-form";
import { useState } from "react";

function CreateCategories() {
  const { categories, setCategories } = useCategories();
  const { register, handleSubmit, reset, setValue } = useForm({});

  let id = categories.length;
  console.log(categories);
  const [changingCategory, setChangingCategory] = useState({ state: false, id: 0 });

  const onSubmit = (data: any) => {
    console.log(data);
    if (!changingCategory.state) {
      id++;
      setCategories([...categories, { id: id, select: { value: data.value, label: data.value } }]);
    } else {
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

  return (
    <section>
      <h2>Категории:</h2>

      {categories.map(({ id, select }: any) => (
        <div>
          {select.value}
          <button
            className="bg-green"
            onClick={() => changeCategory({ value: select.value, id: id })}
          >
            Изменить
          </button>
        </div>
      ))}

      <form className="border-2 border-pink" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("value")} />

        <button className="bg-blue">Добавить</button>
      </form>
    </section>
  );
}

export default CreateCategories;
