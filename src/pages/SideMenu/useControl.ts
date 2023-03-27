import { useEffect, useMemo, useRef, useState } from "react";
import { useUnit } from "effector-react";

import { $categories, $tasks } from "store";

import { checkOutsideClick, filterTask } from "helpers";

function UseControl() {
  const [categories, tasks] = useUnit([$categories, $tasks]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Фильтрация Тасков по 4 категориям для отрисовки в реестре
  const filterTasks = useMemo(() => filterTask({ tasks, categories }), [tasks, categories]);

  const refModal = useRef<any>(null);

  // При открытой модалке нельзя скроллить страницу
  document.body.style.overflow = isModalOpen ? "hidden" : "auto";

  useEffect(() => {
    document.addEventListener("mousedown", checkOutsideClickModal);

    return () => {
      document.removeEventListener("mousedown", checkOutsideClickModal);
    };
  }, [isModalOpen]);

  const checkOutsideClickModal = (e: any) =>
    checkOutsideClick({ e, refModal, setIsModalOpen, isModalOpen });

  return { isModalOpen, setIsModalOpen, filterTasks, refModal };
}

export default UseControl;
