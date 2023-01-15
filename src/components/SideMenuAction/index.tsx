import clsx from "clsx";
import { useState } from "react";

function SideMenuAction({ text, icon }: any) {
  const [isFocus, setIsFocus] = useState(false);

  const before =
    "before:hidden before:hover:block before:absolute before:h-5 before:left-0.5 before:border-1 before:w-0.5 before:bg-gray-light before:rounded";

  return (
    <section
      className={clsx(
        "px-2 mb-1 flex rounded-md items-center bg-green hover:bg-gray-dark h-10",
        before,
      )}
    >
      <div className="mr-2">{icon}</div>
      <h3>{text}</h3>
    </section>
  );
}

export default SideMenuAction;
