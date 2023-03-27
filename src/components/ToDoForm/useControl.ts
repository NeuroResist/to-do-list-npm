import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import { useUnit } from "effector-react";

import { $user } from "store";

import { checkOutsideClick, toastTasks } from "helpers";

import { IUseControl } from "./interface";
import { IOnSubmit } from "pages/TasksRegistry/types";

function useControl({ isModalOpen, setIsModalOpen, refModal, onSubmit }: IUseControl) {
  const notify = () => toastTasks({ toastType: "changeCreate", data: isModalOpen });

  const userName = useUnit($user);

  const {
    reset,
    register,
    clearErrors,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<IOnSubmit>({
    defaultValues: {
      name: "",
      description: "",
      calendar: undefined,
      select: { value: "Дом", label: "Дом" },
    },
  });

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

  const onToDoFormSubmit = (props: any) => {
    onSubmit(props);

    !isModalOpen && refClearValue?.current?.clearValue(); // Ресет категории при отправке формы
    clearErrors();
    reset();
  };

  return {
    refClearValue,
    notify,
    userName,
    reset,
    register,
    clearErrors,
    onToDoFormSubmit,
    handleSubmit,
    control,
    isValid,
    errors,
  };
}

export default useControl;
