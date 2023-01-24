import { ICategory } from "./interface";
import { ICategories } from "./interface";

function Categories({ categories, changeCategory }: ICategories) {
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
        </div>
      ))}
    </>
  );
}

export default Categories;
