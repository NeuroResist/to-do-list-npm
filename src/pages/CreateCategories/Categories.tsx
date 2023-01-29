import { ICategory } from "./interface";
import { ICategories } from "./interface";

function Categories({ categories, changeCategory, deleteCategory }: ICategories) {
  console.log(categories);
  return (
    <>
      {categories.map(({ id, select }: ICategory) => (
        <div>
          {select.value}

          <button
            className="bg-green"
            onClick={() => changeCategory({ value: select.value, id: id })}
          >
            Изменить
          </button>

          <button className="bg-orange" onClick={() => deleteCategory({ id })}>
            Удалить
          </button>
        </div>
      ))}
    </>
  );
}

export default Categories;
