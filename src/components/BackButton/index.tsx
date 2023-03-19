import clsx from "clsx";

import { IBackButton } from "./interface";

function BackButton(props: IBackButton) {
  const { navigate, isDisabled } = props;

  return (
    <button
      disabled={isDisabled}
      className={clsx("absolute top-0 left-0 w-[100px] h-[60px] font-bold", {
        "bg-gray-light": isDisabled,
        "bg-red": !isDisabled,
      })}
      onClick={() => navigate(-1)}
    >
      Назад
    </button>
  );
}

export default BackButton;
