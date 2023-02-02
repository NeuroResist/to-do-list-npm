import { useState } from "react";

export const useGetNextId = ({ newId }: { newId: number }) => {
  const [categoriesId, setCategoriesId] = useState(newId + 1);

  return { categoriesId, setCategoriesId };
};
