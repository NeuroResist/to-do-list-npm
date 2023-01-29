import Categories from "./Categories";
import useControl from "./useControl";

function CreateCategories() {
  const { categories, changeCategory, handleSubmit, register, onSubmit, deleteCategory } =
    useControl();

  return (
    <section>
      <h2>Все категории:</h2>
      <Categories
        categories={categories}
        changeCategory={changeCategory}
        deleteCategory={deleteCategory}
      />

      <form className="border-2 border-pink" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("value", { maxLength: 20, minLength: 3 })} />

        <button className="bg-blue">Добавить</button>
      </form>
    </section>
  );
}

export default CreateCategories;
