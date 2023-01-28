import { useState } from "react";

export const useGetNextId = ({ newId }: any) => {
  const [categoriesId, setCategoriesId] = useState(newId);

  return { categoriesId, setCategoriesId };
};
