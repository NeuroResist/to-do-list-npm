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

          <button
            className="bg-orange"
            onClick={() =>
              changeCategory(
                categories.map((category: any, i: any) => {
                  if (category.id === id) {
                    return categories.splice(i, 1);
                  }
                }),
              )
            }
          >
            Удалить
          </button>
        </div>
      ))}
    </>
  );
}

export default Categories;
