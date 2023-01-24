import { useState } from "react";
import { OPTIONS } from "../MOCK";

function useCategories() {
  const [categories, setCategories] = useState(OPTIONS);

  return { categories, setCategories };
}

export default useCategories;
