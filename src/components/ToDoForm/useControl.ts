import { useEffect, useRef } from "react";
import { useStore } from "effector-react";

import { $user } from "store";

import { checkOutsideClick, toastTasks } from "helpers";

import { IUseControl } from "./interface";

function useControl({ isModalOpen, setIsModalOpen, refModal }: IUseControl) {
  const notify = () => toastTasks({ toastType: "changeCreate", data: isModalOpen });
  const userName = useStore($user);

  // Ref для удаления значения Категории при ресете формы
  const refClearValue = useRef<any>(null);

  const checkOutsideClickModal = (e: any) =>
    setIsModalOpen &&
    isModalOpen &&
    checkOutsideClick({ e, refModal, setIsModalOpen, isModalOpen });

  useEffect(() => {
    document.addEventListener("mousedown", checkOutsideClickModal);

    return () => {
      document.removeEventListener("mousedown", checkOutsideClickModal);
    };
  }, [isModalOpen]);

  return { refClearValue, notify, userName };
}

export default useControl;
