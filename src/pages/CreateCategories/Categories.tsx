import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";

import { ToastContainer } from "react-toastify";

import { toastTasks } from "helpers";

import { ICategory } from "interface";
import { ICategories } from "./interface";

function Categories({ categories, changeCategory, deleteCategory }: ICategories) {
  return (
    <ul className="mb-3">
      <ToastContainer />
      {categories.map(({ id, select }: ICategory) => (
        <li
          key={id}
          className="w-[500px] mb-1 h-10 bg-light-blue mx-10 border-2 rounded flex justify-between items-center px-1"
        >
          <p>{select.value}</p>

          <div>
            <button
              className="mx-1"
              onClick={() => changeCategory({ value: select.value, id: id })}
            >
              <EditIcon />
            </button>

            <button
              onClick={() => {
                toastTasks({ toastType: "category", data: "delete" });
                deleteCategory({ id });
              }}
            >
              <ClearIcon />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
