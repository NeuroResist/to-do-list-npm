import { useEffect, useRef, useState } from "react";
import { useStore } from "effector-react";
import { useNavigate, useOutletContext } from "react-router-dom";

import { $categories } from "store";

import { checkOutsideClick } from "helpers";

import { IOutlet } from "interface";

function useControl() {
  const refModal = useRef<any>(null);
  const categories = useStore($categories);
  const { filterTasks }: IOutlet = useOutletContext();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const checkOutsideClickModal = (e: any) =>
    isModalOpen && checkOutsideClick({ e, refModal, setIsModalOpen, isModalOpen });

  useEffect(() => {
    document.addEventListener("mousedown", checkOutsideClickModal);

    return () => {
      document.removeEventListener("mousedown", checkOutsideClickModal);
    };
  }, [isModalOpen]);

  return { categories, filterTasks, navigate, isModalOpen, setIsModalOpen, refModal };
}

export default useControl;
