import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";

function SideMenuAction({ text, icon, path }: any) {
  const [isFocus, setIsFocus] = useState(false);

  const before =
    "before:hidden before:hover:block before:absolute before:h-5 before:left-0.5 before:border-1 before:w-0.5 before:bg-gray-light before:rounded";

  return (
    <Link to={path}>
      <section
        className={clsx(
          "px-2 mb-1 flex rounded-md items-center bg-green hover:bg-gray-dark h-10",
          before,
        )}
      >
        <div className="mr-2">{icon}</div>
        <h3>{text}</h3>
      </section>
    </Link>
  );
}

export default SideMenuAction;
