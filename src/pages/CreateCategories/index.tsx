import Categories from "./Categories";

import useControl from "./useControl";

function CreateCategories() {
  const { categories, changeCategory, handleSubmit, register, onSubmit, errors } = useControl();

  return (
    <section className="flex justify-center flex-col items-center mt-10">
      <h2 className="font-semibold text-3xl mb-5">Все категории:</h2>

      <Categories categories={categories} changeCategory={changeCategory} />

      <form className="min-w-[300px]" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="h-10 rounded-l-lg border-2 border-blue focus:outline-none pl-2"
          type="text"
          {...register("value", { maxLength: 20, minLength: 3, required: true })}
        />

        <button className="bg-blue w-[100px] rounded-r-lg h-10">Добавить</button>
        {errors.value && (
          <p className="text-red font-bold">
            {errors.value.type === "required"
              ? "Введите описание таски"
              : "Длина названия от 3 до 20 символов"}
          </p>
        )}
      </form>
    </section>
  );
}

export default CreateCategories;
