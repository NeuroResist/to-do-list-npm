import Categories from "./Categories";
import useControl from "./useControl";

function CreateCategories() {
  const { categories, changeCategory, handleSubmit, register, onSubmit, deleteCategory } =
    useControl();

  return (
    <section className="flex justify-center flex-col items-center mt-10">
      <h2 className="font-semibold text-3xl mb-5">Все категории:</h2>
      <Categories
        categories={categories}
        changeCategory={changeCategory}
        deleteCategory={deleteCategory}
      />

      <form className="border-2 border-pink" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("value", { maxLength: 20, minLength: 3, required: true })}
        />

        <button className="bg-blue">Добавить</button>
      </form>
    </section>
  );
}

export default CreateCategories;
