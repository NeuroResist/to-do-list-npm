import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";

import { ICategory } from "interface";
import { ICategories } from "./interface";

function Categories({ categories, changeCategory, deleteCategory }: ICategories) {
  return (
    <div className="mb-3">
      {categories.map(({ id, select }: ICategory) => (
        <section
          key={id}
          className="w-[500px] mb-1 h-10 bg-blue mx-10 border-2 rounded flex justify-between items-center px-1"
        >
          <h3>{select.value}</h3>

          <div>
            <button
              className="mx-1"
              onClick={() => changeCategory({ value: select.value, id: id })}
            >
              <EditIcon />
            </button>

            <button onClick={() => deleteCategory({ id })}>
              <ClearIcon />
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Categories;
