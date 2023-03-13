import clsx from "clsx";

import Categories from "./Categories";
import BackButton from "components/BackButton";

import useControl from "./useControl";

function CreateCategories() {
  const {
    navigate,
    categories,
    changeCategory,
    handleSubmit,
    register,
    onSubmit,
    errors,
    isChanging,
    setChangingCategory,
    setValue,
    isDirty,
  } = useControl();

  return (
    <section className="flex justify-center flex-col items-center mt-10">
      <h2 className="font-semibold text-3xl mb-5">Все категории:</h2>
      <BackButton isDisabled={isChanging} navigate={navigate} />

      <Categories categories={categories} changeCategory={changeCategory} />

      <form className="min-w-[300px]" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="h-10 rounded-l-lg border-2 border-blue border-r-red focus:outline-none pl-2"
          type="text"
          {...register("value", { maxLength: 20, minLength: 3, required: true })}
        />

        <button
          disabled={!isDirty}
          type="button"
          onClick={() => {
            setChangingCategory("");
            setValue("value", "");
          }}
          className={clsx("w-[100px] h-10", {
            "bg-red": isDirty && !errors.value,
            "bg-gray-light": !isDirty && !errors.value,
          })}
        >
          Отмена
        </button>

        <button
          disabled={!isDirty}
          type="submit"
          className={clsx("w-[100px] rounded-r-lg h-10", {
            "bg-blue": isDirty && !errors.value,
            "bg-gray-light": !isDirty && !errors.value,
          })}
        >
          {isChanging ? "Обновить" : "Сохранить"}
        </button>

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
